#!/usr/bin/env python3
"""Reject attribution and session markers in Git commit messages.

Runs at prepare-commit-msg (strip), commit-msg (refuse), pre-push (refuse the pushed
range) and in CI (refuse every commit a pull request or push introduces).
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from collections.abc import Mapping
from pathlib import Path
from typing import NamedTuple


class CommitMessage(NamedTuple):
    """A commit identifier and its full message."""

    commit: str
    message: str


# Keep every pattern narrow enough that prose about an assistant is not a violation:
# only a trailer keyword, an agent identity, or a session link matches.
FORBIDDEN_MARKERS = {
    "Co-Authored-By": re.compile(r"co[\t _-]*authored[\t _-]*by", re.IGNORECASE),
    "Co-Designed-With": re.compile(r"co[\t _-]*designed[\t _-]*with", re.IGNORECASE),
    "Agent-Session": re.compile(r"(?:claude|codex)[\t _-]*session", re.IGNORECASE),
    "Generated-With": re.compile(
        r"generated[\t _-]*with[\t _-]*\[?\s*(claude|cursor|codex|copilot)",
        re.IGNORECASE,
    ),
    # Codex CLI's trailer is `Co-authored-by: Codex <noreply@openai.com>`; the GitHub
    # account it resolves to also takes codex@users.noreply.github.com, and Codex cloud
    # acts through the chatgpt-codex-connector app.
    "Agent-Identity": re.compile(
        r"cursoragent@cursor\.com|noreply@anthropic\.com|noreply@openai\.com"
        r"|(?<![\w.+-])(?:\d+\+)?codex@users\.noreply\.github\.com"
        r"|chatgpt-codex-connector",
        re.IGNORECASE,
    ),
    # Includes Codex cloud task links (chatgpt.com/codex/...) and ChatGPT share and
    # conversation links (chatgpt.com/s/..., chatgpt.com/c/...).
    "Session-Link": re.compile(
        r"https?://(?:www\.)?(?:claude\.(?:ai|com)|cursor\.com)/\S"
        r"|https?://(?:www\.)?chatgpt\.com/(?:codex|s|c)/\S",
        re.IGNORECASE,
    ),
}
ZERO_OID = re.compile(r"^0+$")


def forbidden_markers(message: str) -> tuple[str, ...]:
    """Return the canonical names of forbidden markers present in ``message``."""
    return tuple(
        name for name, pattern in FORBIDDEN_MARKERS.items() if pattern.search(message)
    )


def stripped_message(message: str) -> str:
    """Return ``message`` with every line carrying a forbidden marker dropped.

    Line-wise on purpose: a trailer is a line, and the whole-message check still
    refuses anything this misses, such as a marker split across a line break.
    """
    kept = [line for line in message.splitlines() if not forbidden_markers(line)]
    while kept and not kept[-1].strip():
        kept.pop()
    return "\n".join(kept) + "\n" if kept else ""


def commit_exists(commit: str) -> bool:
    """Return whether ``commit`` resolves to a local commit object."""
    return (
        subprocess.run(
            ["git", "cat-file", "-e", f"{commit}^{{commit}}"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        ).returncode
        == 0
    )


def commit_messages(base: str, head: str) -> tuple[CommitMessage, ...]:
    """Return messages reachable from ``head`` but not ``base``.

    An empty, all-zero, or unresolvable base checks the complete history reachable from
    ``head``, so a rewritten or unknown base fails closed rather than checking nothing.
    """
    revision = (
        f"{base}..{head}"
        if base and not ZERO_OID.fullmatch(base) and commit_exists(base)
        else head
    )
    result = subprocess.run(
        ["git", "log", "-z", "--format=%H%x00%B", revision],
        check=True,
        stdout=subprocess.PIPE,
    )
    fields = result.stdout.decode("utf-8", errors="replace").split("\0")
    return tuple(
        CommitMessage(commit, message)
        for commit, message in zip(fields[0::2], fields[1::2], strict=False)
        if commit
    )


def pre_push_commit_messages(environ: Mapping[str, str]) -> tuple[CommitMessage, ...]:
    """Return messages in the ref range exposed by pre-commit's push stage."""
    head = environ.get("PRE_COMMIT_TO_REF", "")
    if not head:
        raise ValueError("PRE_COMMIT_TO_REF is required at the pre-push stage")
    return commit_messages(environ.get("PRE_COMMIT_FROM_REF", ""), head)


def violations(messages: tuple[CommitMessage, ...]) -> list[str]:
    """Return one diagnostic for each message containing a forbidden marker."""
    found: list[str] = []
    for commit, message in messages:
        markers = forbidden_markers(message)
        if markers:
            found.append(f"{commit}: {', '.join(markers)}")
    return found


def parse_args() -> argparse.Namespace:
    """Parse a message-file check, a repair, or a Git range check."""
    parser = argparse.ArgumentParser(description=__doc__)
    source = parser.add_mutually_exclusive_group(required=True)
    source.add_argument("--message-file", type=Path, help="check one message file")
    source.add_argument(
        "--strip-message-file",
        type=Path,
        help="remove forbidden lines from one message file and succeed; for the "
        "prepare-commit-msg stage, the only message hook `--no-verify` does not skip",
    )
    source.add_argument("--head", help="check commits reachable from this revision")
    source.add_argument("--pre-push", action="store_true", help="check the push range")
    parser.add_argument(
        "--base",
        default="",
        help="exclude commits reachable from this revision; omit it to scan the whole "
        "history of --head, which is what an audit after a history rewrite requires",
    )
    return parser.parse_args()


def strip(path: Path) -> int:
    """Repair one message file in place, reporting what was removed."""
    original = path.read_text(encoding="utf-8")
    markers = forbidden_markers(original)
    if not markers:
        return 0
    path.write_text(stripped_message(original), encoding="utf-8")
    print(
        f"Removed attribution from the commit message: {', '.join(markers)}",
        file=sys.stderr,
    )
    return 0


def main() -> int:
    """Check one message file or a Git revision range."""
    args = parse_args()
    if args.strip_message_file is not None:
        return strip(args.strip_message_file)
    if args.message_file is not None:
        path: Path = args.message_file
        messages = (CommitMessage(str(path), path.read_text(encoding="utf-8")),)
    elif args.pre_push:
        messages = pre_push_commit_messages(os.environ)
    else:
        messages = commit_messages(args.base, args.head)

    found = violations(messages)
    if not found:
        return 0

    print("Commit messages must not contain attribution or session markers:")
    for violation in found:
        print(f"  {violation}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
