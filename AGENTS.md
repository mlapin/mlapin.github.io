# Agent instructions

Personal academic site, served by GitHub Pages from `main`. Plain static HTML and CSS
with no build step: `index.html`, `stylesheet.css`, `topk/`, `libsdca/`, `images/`, `cv.pdf`.

## Commits and pull requests

- No attribution in commit messages or pull request descriptions: no `Co-Authored-By`
  trailer, no "Generated with ..." line, no session link, no agent email address. Turn off
  any tool setting that adds one. `.github/scripts/check_commit_messages.py` removes
  these markers locally and CI refuses any commit that still carries one.
- Never commit or push to `main`. Work on a feature branch and open a pull request; a
  merge needs the `attribution`, `hygiene` and `validate` checks green.
- Never bypass hooks (`--no-verify`, `-c core.hooksPath=...`). If a hook fails, fix the cause.
- Never commit secrets, tokens, private keys, or `.env` files. Pre-commit runs gitleaks on
  staged changes, CI scans the full history, and GitHub push protection is on.

## Setup

Install the hooks once per clone (`pre-commit install` installs every hook type the
config lists):

```sh
uv tool install pre-commit   # or: pipx install pre-commit
pre-commit install
```

## Checks

CI (`.github/workflows/site.yml`) runs these on every pull request; run them locally
before pushing:

- `python3 .github/scripts/check_commit_messages.py --base origin/main --head HEAD`
- `pre-commit run --all-files`
- `npx html-validate "**/*.html"` (config: `.htmlvalidate.json`)
- `lychee --root-dir "$PWD" "**/*.html"` (exclusions: `.lycheeignore`; only add a site
  there when it blocks automated checkers, never to hide a genuinely dead link)

## Editing the site

- Keep pages self-contained: no build tools, frameworks, or third-party trackers.
- Keep files under 5 MB; prefer WebP for images and provide a `_still` variant for
  animations (used under `prefers-reduced-motion`).
- Every `<img>` needs `alt` (empty for decorative images); labelled `<canvas>` elements
  need `role="img"`.
- Strip location and camera metadata from photos before committing them.
