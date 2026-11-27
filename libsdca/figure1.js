/* Figure 1 of the libsdca technical report. Generated together with the report; do not edit. */
    (function () {
      "use strict";
      const DATA = {"teaser":{"solver_speedups":[{"label":"n = 200,000, d = 100","detail":"","classes":10,"base_label":"LIBLINEAR","base_s":48.2,"eager":null,"strong":3.06,"lib_s":15.7},{"label":"n = 2,000, d = 500","detail":"","classes":10,"base_label":"LIBLINEAR","base_s":2.78,"eager":null,"strong":5.0,"lib_s":0.556},{"label":"n = 2,000, d = 8,000","detail":"","classes":10,"base_label":"LIBLINEAR","base_s":4.65,"eager":14.8,"strong":4.51,"lib_s":1.03,"reused_s":0.314},{"label":"n = 2,000, d = 32,000","detail":"","classes":10,"base_label":"LIBLINEAR","base_s":78.0,"eager":71.1,"strong":19.8,"lib_s":3.93,"reused_s":1.1}]},"per_logit":{"losses":[["cross_entropy","Cross-entropy"]],"points":{"torch":{"cross_entropy":{"bf16":[{"logits":1024000,"classes":32000,"shape":"32 \u00d7 32,000","lib_ms":0.1985,"ref_ms":0.4397,"sp":2.177,"verdict":"faster","eager_ms":0.1999},{"logits":1026048,"classes":128256,"shape":"8 \u00d7 128,256","lib_ms":0.1859,"ref_ms":0.4367,"sp":2.267,"verdict":"faster","eager_ms":0.2239},{"logits":1048000,"classes":1000,"shape":"1,048 \u00d7 1,000","lib_ms":0.1413,"ref_ms":0.2454,"sp":1.904,"verdict":"faster","eager_ms":0.1376},{"logits":1048500,"classes":100,"shape":"10,485 \u00d7 100","lib_ms":0.1826,"ref_ms":0.4204,"sp":2.285,"verdict":"faster","eager_ms":0.1774},{"logits":1048570,"classes":10,"shape":"104,857 \u00d7 10","lib_ms":0.184,"ref_ms":0.3986,"sp":2.226,"verdict":"faster","eager_ms":0.2182},{"logits":1048576,"classes":4096,"shape":"256 \u00d7 4,096","lib_ms":0.1161,"ref_ms":0.2469,"sp":2.148,"verdict":"faster","eager_ms":0.1373},{"logits":2140712,"classes":21844,"shape":"98 \u00d7 21,844","lib_ms":0.1937,"ref_ms":0.4146,"sp":2.21,"verdict":"faster","eager_ms":0.2254},{"logits":2283732,"classes":237,"shape":"9,636 \u00d7 237","lib_ms":0.129,"ref_ms":0.2821,"sp":2.053,"verdict":"faster","eager_ms":0.1527},{"logits":2532762,"classes":1054,"shape":"2,403 \u00d7 1,054","lib_ms":0.1438,"ref_ms":0.3006,"sp":2.189,"verdict":"faster","eager_ms":0.1651},{"logits":2609332,"classes":124,"shape":"21,043 \u00d7 124","lib_ms":0.1884,"ref_ms":0.3786,"sp":2.194,"verdict":"faster","eager_ms":0.1854},{"logits":3124598,"classes":3134,"shape":"997 \u00d7 3,134","lib_ms":0.1632,"ref_ms":0.3406,"sp":2.14,"verdict":"faster","eager_ms":0.1923},{"logits":3637623,"classes":3993,"shape":"911 \u00d7 3,993","lib_ms":0.1375,"ref_ms":0.3046,"sp":2.085,"verdict":"faster","eager_ms":0.1498},{"logits":4258935,"classes":59985,"shape":"71 \u00d7 59,985","lib_ms":0.1454,"ref_ms":0.3116,"sp":2.232,"verdict":"faster","eager_ms":0.1677},{"logits":4864998,"classes":1317,"shape":"3,694 \u00d7 1,317","lib_ms":0.1401,"ref_ms":0.3328,"sp":2.168,"verdict":"faster","eager_ms":0.1535},{"logits":5317620,"classes":40285,"shape":"132 \u00d7 40,285","lib_ms":0.2082,"ref_ms":0.4084,"sp":2.057,"verdict":"faster","eager_ms":0.2197},{"logits":6291456,"classes":24,"shape":"262,144 \u00d7 24","lib_ms":0.1466,"ref_ms":0.3149,"sp":2.314,"verdict":"faster","eager_ms":0.6598},{"logits":6440664,"classes":7253,"shape":"888 \u00d7 7,253","lib_ms":0.1599,"ref_ms":0.3128,"sp":2.068,"verdict":"faster","eager_ms":0.1782},{"logits":6806842,"classes":14,"shape":"486,203 \u00d7 14","lib_ms":0.1747,"ref_ms":0.3935,"sp":2.203,"verdict":"faster","eager_ms":1.001},{"logits":8121537,"classes":1073,"shape":"7,569 \u00d7 1,073","lib_ms":0.14,"ref_ms":0.3125,"sp":2.133,"verdict":"faster","eager_ms":0.1777},{"logits":8336640,"classes":128256,"shape":"65 \u00d7 128,256","lib_ms":0.1629,"ref_ms":0.3789,"sp":2.3,"verdict":"faster","eager_ms":0.1772},{"logits":8384000,"classes":32000,"shape":"262 \u00d7 32,000","lib_ms":0.196,"ref_ms":0.4059,"sp":2.08,"verdict":"faster","eager_ms":0.2234},{"logits":8388000,"classes":1000,"shape":"8,388 \u00d7 1,000","lib_ms":0.1995,"ref_ms":0.3816,"sp":2.372,"verdict":"faster","eager_ms":0.1816},{"logits":8388600,"classes":10,"shape":"838,860 \u00d7 10","lib_ms":0.2125,"ref_ms":0.4704,"sp":2.139,"verdict":"faster","eager_ms":1.647},{"logits":8388600,"classes":100,"shape":"83,886 \u00d7 100","lib_ms":0.1535,"ref_ms":0.3305,"sp":2.206,"verdict":"faster","eager_ms":0.327},{"logits":8388608,"classes":4096,"shape":"2,048 \u00d7 4,096","lib_ms":0.1833,"ref_ms":0.402,"sp":2.177,"verdict":"faster","eager_ms":0.211},{"logits":8596553,"classes":117761,"shape":"73 \u00d7 117,761","lib_ms":0.1995,"ref_ms":0.4701,"sp":2.353,"verdict":"faster","eager_ms":0.2176},{"logits":9020536,"classes":8156,"shape":"1,106 \u00d7 8,156","lib_ms":0.1931,"ref_ms":0.4277,"sp":2.188,"verdict":"faster","eager_ms":0.2077},{"logits":12800000,"classes":32,"shape":"400,000 \u00d7 32","lib_ms":0.1439,"ref_ms":0.3198,"sp":2.277,"verdict":"faster","eager_ms":1.118},{"logits":12800000,"classes":128,"shape":"100,000 \u00d7 128","lib_ms":0.1581,"ref_ms":0.3372,"sp":2.202,"verdict":"faster","eager_ms":0.4117},{"logits":14285458,"classes":11,"shape":"1,298,678 \u00d7 11","lib_ms":0.1749,"ref_ms":0.2673,"sp":1.65,"verdict":"faster","eager_ms":2.767},{"logits":14617009,"classes":73,"shape":"200,233 \u00d7 73","lib_ms":0.2434,"ref_ms":0.4589,"sp":1.717,"verdict":"faster","eager_ms":0.7038},{"logits":15000000,"classes":50,"shape":"300,000 \u00d7 50","lib_ms":0.1793,"ref_ms":0.3685,"sp":2.183,"verdict":"faster","eager_ms":0.94},{"logits":16384000,"classes":250,"shape":"65,536 \u00d7 250","lib_ms":0.1448,"ref_ms":0.3367,"sp":2.341,"verdict":"faster","eager_ms":0.3644},{"logits":16384000,"classes":1000,"shape":"16,384 \u00d7 1,000","lib_ms":0.1755,"ref_ms":0.4394,"sp":2.471,"verdict":"faster","eager_ms":0.2294},{"logits":16887843,"classes":3801,"shape":"4,443 \u00d7 3,801","lib_ms":0.1455,"ref_ms":0.3936,"sp":2.353,"verdict":"faster","eager_ms":0.2642},{"logits":52368377,"classes":1447,"shape":"36,191 \u00d7 1,447","lib_ms":0.4111,"ref_ms":0.5111,"sp":1.242,"verdict":"faster","eager_ms":0.7191},{"logits":67077888,"classes":128256,"shape":"523 \u00d7 128,256","lib_ms":0.3256,"ref_ms":0.4385,"sp":1.351,"verdict":"faster","eager_ms":0.9316},{"logits":67104000,"classes":32000,"shape":"2,097 \u00d7 32,000","lib_ms":0.3402,"ref_ms":0.4323,"sp":1.286,"verdict":"faster","eager_ms":0.7777},{"logits":67108000,"classes":1000,"shape":"67,108 \u00d7 1,000","lib_ms":0.3551,"ref_ms":0.4059,"sp":1.123,"verdict":"faster","eager_ms":0.8755},{"logits":67108800,"classes":100,"shape":"671,088 \u00d7 100","lib_ms":0.4452,"ref_ms":0.4552,"sp":1.037,"verdict":"faster","eager_ms":2.549},{"logits":67108860,"classes":10,"shape":"6,710,886 \u00d7 10","lib_ms":0.7331,"ref_ms":0.8002,"sp":1.091,"verdict":"faster","eager_ms":14.11},{"logits":67108864,"classes":4096,"shape":"16,384 \u00d7 4,096","lib_ms":0.4235,"ref_ms":0.48,"sp":1.147,"verdict":"faster","eager_ms":0.7877},{"logits":128657920,"classes":50257,"shape":"2,560 \u00d7 50,257","lib_ms":0.6212,"ref_ms":0.8992,"sp":1.446,"verdict":"faster","eager_ms":1.532},{"logits":131072000,"classes":32000,"shape":"4,096 \u00d7 32,000","lib_ms":0.6283,"ref_ms":0.6408,"sp":1.015,"verdict":"neither","eager_ms":1.461},{"logits":134234112,"classes":8193,"shape":"16,384 \u00d7 8,193","lib_ms":0.7594,"ref_ms":0.9596,"sp":1.265,"verdict":"faster","eager_ms":1.837},{"logits":262144000,"classes":32000,"shape":"8,192 \u00d7 32,000","lib_ms":1.25,"ref_ms":1.26,"sp":1.009,"verdict":"neither","eager_ms":2.898},{"logits":1050673152,"classes":128256,"shape":"8,192 \u00d7 128,256","lib_ms":4.757,"ref_ms":5.138,"sp":1.078,"verdict":"faster","eager_ms":13.61}],"fp32":[{"logits":1024000,"classes":32000,"shape":"32 \u00d7 32,000","lib_ms":0.1813,"ref_ms":0.309,"sp":2.052,"verdict":"faster","eager_ms":0.1921},{"logits":1026048,"classes":128256,"shape":"8 \u00d7 128,256","lib_ms":0.1465,"ref_ms":0.3059,"sp":2.067,"verdict":"faster","eager_ms":0.1646},{"logits":1048000,"classes":1000,"shape":"1,048 \u00d7 1,000","lib_ms":0.1407,"ref_ms":0.2929,"sp":2.08,"verdict":"faster","eager_ms":0.1624},{"logits":1048500,"classes":100,"shape":"10,485 \u00d7 100","lib_ms":0.1455,"ref_ms":0.3171,"sp":2.144,"verdict":"faster","eager_ms":0.1657},{"logits":1048570,"classes":10,"shape":"104,857 \u00d7 10","lib_ms":0.2077,"ref_ms":0.49,"sp":2.299,"verdict":"faster","eager_ms":0.2456},{"logits":1048576,"classes":4096,"shape":"256 \u00d7 4,096","lib_ms":0.1876,"ref_ms":0.4393,"sp":2.287,"verdict":"faster","eager_ms":0.2134},{"logits":2140712,"classes":21844,"shape":"98 \u00d7 21,844","lib_ms":0.2193,"ref_ms":0.4811,"sp":2.174,"verdict":"faster","eager_ms":0.2466},{"logits":2283732,"classes":237,"shape":"9,636 \u00d7 237","lib_ms":0.1756,"ref_ms":0.3418,"sp":2.209,"verdict":"faster","eager_ms":0.1788},{"logits":2475531,"classes":9,"shape":"275,059 \u00d7 9","lib_ms":0.1858,"ref_ms":0.4408,"sp":2.255,"verdict":"faster","eager_ms":0.6111},{"logits":2532762,"classes":1054,"shape":"2,403 \u00d7 1,054","lib_ms":0.1723,"ref_ms":0.3345,"sp":2.143,"verdict":"faster","eager_ms":0.1987},{"logits":2609332,"classes":124,"shape":"21,043 \u00d7 124","lib_ms":0.1023,"ref_ms":0.2326,"sp":2.434,"verdict":"faster","eager_ms":0.1169},{"logits":3124598,"classes":3134,"shape":"997 \u00d7 3,134","lib_ms":0.1287,"ref_ms":0.2692,"sp":2.097,"verdict":"faster","eager_ms":0.15},{"logits":3637623,"classes":3993,"shape":"911 \u00d7 3,993","lib_ms":0.1639,"ref_ms":0.3678,"sp":2.163,"verdict":"faster","eager_ms":0.1819},{"logits":4258935,"classes":59985,"shape":"71 \u00d7 59,985","lib_ms":0.1943,"ref_ms":0.4568,"sp":2.35,"verdict":"faster","eager_ms":0.2125},{"logits":4864998,"classes":1317,"shape":"3,694 \u00d7 1,317","lib_ms":0.1419,"ref_ms":0.3246,"sp":2.315,"verdict":"faster","eager_ms":0.1663},{"logits":5317620,"classes":40285,"shape":"132 \u00d7 40,285","lib_ms":0.2088,"ref_ms":0.4705,"sp":2.197,"verdict":"faster","eager_ms":0.244},{"logits":6291456,"classes":24,"shape":"262,144 \u00d7 24","lib_ms":0.15,"ref_ms":0.3661,"sp":2.425,"verdict":"faster","eager_ms":0.7964},{"logits":6440664,"classes":7253,"shape":"888 \u00d7 7,253","lib_ms":0.1467,"ref_ms":0.2945,"sp":2.027,"verdict":"faster","eager_ms":0.1684},{"logits":6806842,"classes":14,"shape":"486,203 \u00d7 14","lib_ms":0.1779,"ref_ms":0.4423,"sp":2.426,"verdict":"faster","eager_ms":1.245},{"logits":8121537,"classes":1073,"shape":"7,569 \u00d7 1,073","lib_ms":0.1766,"ref_ms":0.3554,"sp":2.024,"verdict":"faster","eager_ms":0.238},{"logits":8336640,"classes":128256,"shape":"65 \u00d7 128,256","lib_ms":0.1618,"ref_ms":0.379,"sp":2.322,"verdict":"faster","eager_ms":0.2727},{"logits":8384000,"classes":32000,"shape":"262 \u00d7 32,000","lib_ms":0.1487,"ref_ms":0.284,"sp":2.134,"verdict":"faster","eager_ms":0.233},{"logits":8388000,"classes":1000,"shape":"8,388 \u00d7 1,000","lib_ms":0.1397,"ref_ms":0.3219,"sp":2.373,"verdict":"faster","eager_ms":0.2025},{"logits":8388600,"classes":10,"shape":"838,860 \u00d7 10","lib_ms":0.159,"ref_ms":0.3435,"sp":2.211,"verdict":"faster","eager_ms":1.987},{"logits":8388600,"classes":100,"shape":"83,886 \u00d7 100","lib_ms":0.1884,"ref_ms":0.4665,"sp":2.475,"verdict":"faster","eager_ms":0.3909},{"logits":8388608,"classes":4096,"shape":"2,048 \u00d7 4,096","lib_ms":0.1415,"ref_ms":0.2972,"sp":2.154,"verdict":"faster","eager_ms":0.1905},{"logits":8454144,"classes":129,"shape":"65,536 \u00d7 129","lib_ms":0.1183,"ref_ms":0.2576,"sp":2.231,"verdict":"faster","eager_ms":0.3426},{"logits":8596553,"classes":117761,"shape":"73 \u00d7 117,761","lib_ms":0.1621,"ref_ms":0.3793,"sp":2.338,"verdict":"faster","eager_ms":0.2791},{"logits":9020536,"classes":8156,"shape":"1,106 \u00d7 8,156","lib_ms":0.1889,"ref_ms":0.4334,"sp":2.371,"verdict":"faster","eager_ms":0.2112},{"logits":12800000,"classes":32,"shape":"400,000 \u00d7 32","lib_ms":0.1869,"ref_ms":0.4534,"sp":2.492,"verdict":"faster","eager_ms":1.346},{"logits":12800000,"classes":128,"shape":"100,000 \u00d7 128","lib_ms":0.1516,"ref_ms":0.3195,"sp":2.127,"verdict":"faster","eager_ms":0.5362},{"logits":14285458,"classes":11,"shape":"1,298,678 \u00d7 11","lib_ms":0.213,"ref_ms":0.3501,"sp":1.735,"verdict":"faster","eager_ms":3.138},{"logits":14617009,"classes":73,"shape":"200,233 \u00d7 73","lib_ms":0.3077,"ref_ms":0.39,"sp":1.249,"verdict":"faster","eager_ms":0.8479},{"logits":15000000,"classes":50,"shape":"300,000 \u00d7 50","lib_ms":0.1931,"ref_ms":0.4373,"sp":2.054,"verdict":"faster","eager_ms":1.111},{"logits":16887843,"classes":3801,"shape":"4,443 \u00d7 3,801","lib_ms":0.195,"ref_ms":0.4297,"sp":2.094,"verdict":"faster","eager_ms":0.4062},{"logits":52368377,"classes":1447,"shape":"36,191 \u00d7 1,447","lib_ms":0.5965,"ref_ms":0.628,"sp":1.049,"verdict":"faster","eager_ms":1.1},{"logits":67077888,"classes":128256,"shape":"523 \u00d7 128,256","lib_ms":0.6025,"ref_ms":0.6735,"sp":1.115,"verdict":"faster","eager_ms":1.82},{"logits":67104000,"classes":32000,"shape":"2,097 \u00d7 32,000","lib_ms":0.6063,"ref_ms":0.6381,"sp":1.052,"verdict":"faster","eager_ms":1.75},{"logits":67108000,"classes":1000,"shape":"67,108 \u00d7 1,000","lib_ms":0.6215,"ref_ms":0.6322,"sp":1.016,"verdict":"neither","eager_ms":1.373},{"logits":67108800,"classes":100,"shape":"671,088 \u00d7 100","lib_ms":0.6958,"ref_ms":0.7015,"sp":1.008,"verdict":"neither","eager_ms":3.04},{"logits":67108860,"classes":10,"shape":"6,710,886 \u00d7 10","lib_ms":0.9194,"ref_ms":1.032,"sp":1.116,"verdict":"faster","eager_ms":15.68},{"logits":67108864,"classes":4096,"shape":"16,384 \u00d7 4,096","lib_ms":0.6372,"ref_ms":0.6581,"sp":1.033,"verdict":"faster","eager_ms":1.234},{"logits":128657920,"classes":50257,"shape":"2,560 \u00d7 50,257","lib_ms":1.151,"ref_ms":1.392,"sp":1.208,"verdict":"faster","eager_ms":3.431},{"logits":131072000,"classes":32000,"shape":"4,096 \u00d7 32,000","lib_ms":1.163,"ref_ms":1.21,"sp":1.04,"verdict":"faster","eager_ms":3.387},{"logits":134234112,"classes":8193,"shape":"16,384 \u00d7 8,193","lib_ms":1.247,"ref_ms":1.323,"sp":1.061,"verdict":"faster","eager_ms":2.554},{"logits":262144000,"classes":32000,"shape":"8,192 \u00d7 32,000","lib_ms":2.326,"ref_ms":2.387,"sp":1.028,"verdict":"neither","eager_ms":6.761},{"logits":1050673152,"classes":128256,"shape":"8,192 \u00d7 128,256","lib_ms":9.062,"ref_ms":9.407,"sp":1.039,"verdict":"faster","eager_ms":27.33}]}},"jax":{"cross_entropy":{"bf16":[{"logits":1024000,"classes":32000,"shape":"32 \u00d7 32,000","lib_ms":0.0678,"ref_ms":0.08147,"sp":1.179,"verdict":"faster"},{"logits":1026048,"classes":128256,"shape":"8 \u00d7 128,256","lib_ms":0.08537,"ref_ms":0.08875,"sp":1.049,"verdict":"faster"},{"logits":1048000,"classes":1000,"shape":"1,048 \u00d7 1,000","lib_ms":0.08607,"ref_ms":0.08979,"sp":1.035,"verdict":"faster"},{"logits":1048500,"classes":100,"shape":"10,485 \u00d7 100","lib_ms":0.0917,"ref_ms":0.09659,"sp":1.031,"verdict":"faster"},{"logits":1048570,"classes":10,"shape":"104,857 \u00d7 10","lib_ms":0.1097,"ref_ms":0.1123,"sp":1.033,"verdict":"neither"},{"logits":1048576,"classes":4096,"shape":"256 \u00d7 4,096","lib_ms":0.09887,"ref_ms":0.1082,"sp":1.071,"verdict":"faster"},{"logits":2140712,"classes":21844,"shape":"98 \u00d7 21,844","lib_ms":0.07668,"ref_ms":0.08641,"sp":1.061,"verdict":"faster"},{"logits":2283732,"classes":237,"shape":"9,636 \u00d7 237","lib_ms":0.1043,"ref_ms":0.1088,"sp":1.017,"verdict":"neither"},{"logits":2532762,"classes":1054,"shape":"2,403 \u00d7 1,054","lib_ms":0.106,"ref_ms":0.1075,"sp":1.014,"verdict":"neither"},{"logits":2609332,"classes":124,"shape":"21,043 \u00d7 124","lib_ms":0.08863,"ref_ms":0.09391,"sp":1.083,"verdict":"faster"},{"logits":3124598,"classes":3134,"shape":"997 \u00d7 3,134","lib_ms":0.1054,"ref_ms":0.1121,"sp":1.056,"verdict":"faster"},{"logits":3637623,"classes":3993,"shape":"911 \u00d7 3,993","lib_ms":0.1097,"ref_ms":0.1152,"sp":1.03,"verdict":"neither"},{"logits":4258935,"classes":59985,"shape":"71 \u00d7 59,985","lib_ms":0.08464,"ref_ms":0.08533,"sp":1.016,"verdict":"neither"},{"logits":4864998,"classes":1317,"shape":"3,694 \u00d7 1,317","lib_ms":0.09366,"ref_ms":0.1017,"sp":1.047,"verdict":"faster"},{"logits":5317620,"classes":40285,"shape":"132 \u00d7 40,285","lib_ms":0.07252,"ref_ms":0.0745,"sp":1.072,"verdict":"neither"},{"logits":6440664,"classes":7253,"shape":"888 \u00d7 7,253","lib_ms":0.07735,"ref_ms":0.08077,"sp":1.058,"verdict":"faster"},{"logits":6806842,"classes":14,"shape":"486,203 \u00d7 14","lib_ms":0.09467,"ref_ms":0.08435,"sp":0.9491,"verdict":"neither"},{"logits":8121537,"classes":1073,"shape":"7,569 \u00d7 1,073","lib_ms":0.1054,"ref_ms":0.1056,"sp":1.016,"verdict":"neither"},{"logits":8336640,"classes":128256,"shape":"65 \u00d7 128,256","lib_ms":0.0586,"ref_ms":0.07264,"sp":1.204,"verdict":"faster"},{"logits":8384000,"classes":32000,"shape":"262 \u00d7 32,000","lib_ms":0.08353,"ref_ms":0.08357,"sp":1.0,"verdict":"neither"},{"logits":8388000,"classes":1000,"shape":"8,388 \u00d7 1,000","lib_ms":0.1031,"ref_ms":0.0992,"sp":0.9893,"verdict":"neither"},{"logits":8388600,"classes":10,"shape":"838,860 \u00d7 10","lib_ms":0.1039,"ref_ms":0.1124,"sp":1.076,"verdict":"faster"},{"logits":8388600,"classes":100,"shape":"83,886 \u00d7 100","lib_ms":0.0829,"ref_ms":0.0886,"sp":1.051,"verdict":"faster"},{"logits":8388608,"classes":4096,"shape":"2,048 \u00d7 4,096","lib_ms":0.103,"ref_ms":0.1095,"sp":1.041,"verdict":"faster"},{"logits":8596553,"classes":117761,"shape":"73 \u00d7 117,761","lib_ms":0.06571,"ref_ms":0.1106,"sp":1.637,"verdict":"faster"},{"logits":9020536,"classes":8156,"shape":"1,106 \u00d7 8,156","lib_ms":0.07575,"ref_ms":0.07686,"sp":1.014,"verdict":"neither"},{"logits":14285458,"classes":11,"shape":"1,298,678 \u00d7 11","lib_ms":0.17,"ref_ms":0.1978,"sp":1.163,"verdict":"faster"},{"logits":14617009,"classes":73,"shape":"200,233 \u00d7 73","lib_ms":0.2025,"ref_ms":0.428,"sp":2.113,"verdict":"faster"},{"logits":16384000,"classes":250,"shape":"65,536 \u00d7 250","lib_ms":0.1135,"ref_ms":0.1514,"sp":1.334,"verdict":"faster"},{"logits":16384000,"classes":1000,"shape":"16,384 \u00d7 1,000","lib_ms":0.0993,"ref_ms":0.1329,"sp":1.344,"verdict":"faster"},{"logits":16887843,"classes":3801,"shape":"4,443 \u00d7 3,801","lib_ms":0.1386,"ref_ms":0.1449,"sp":1.045,"verdict":"faster"},{"logits":52368377,"classes":1447,"shape":"36,191 \u00d7 1,447","lib_ms":0.4351,"ref_ms":0.3703,"sp":0.851,"verdict":"slower"},{"logits":67077888,"classes":128256,"shape":"523 \u00d7 128,256","lib_ms":0.3236,"ref_ms":0.4285,"sp":1.326,"verdict":"faster"},{"logits":67104000,"classes":32000,"shape":"2,097 \u00d7 32,000","lib_ms":0.3297,"ref_ms":0.4382,"sp":1.329,"verdict":"faster"},{"logits":67108000,"classes":1000,"shape":"67,108 \u00d7 1,000","lib_ms":0.3515,"ref_ms":0.4498,"sp":1.276,"verdict":"faster"},{"logits":67108800,"classes":100,"shape":"671,088 \u00d7 100","lib_ms":0.4725,"ref_ms":0.6376,"sp":1.348,"verdict":"faster"},{"logits":67108860,"classes":10,"shape":"6,710,886 \u00d7 10","lib_ms":0.6959,"ref_ms":0.7602,"sp":1.091,"verdict":"faster"},{"logits":67108864,"classes":4096,"shape":"16,384 \u00d7 4,096","lib_ms":0.4073,"ref_ms":0.4242,"sp":1.042,"verdict":"faster"},{"logits":128657920,"classes":50257,"shape":"2,560 \u00d7 50,257","lib_ms":0.6141,"ref_ms":0.9021,"sp":1.466,"verdict":"faster"},{"logits":131072000,"classes":32000,"shape":"4,096 \u00d7 32,000","lib_ms":0.6197,"ref_ms":0.842,"sp":1.359,"verdict":"faster"},{"logits":134234112,"classes":8193,"shape":"16,384 \u00d7 8,193","lib_ms":0.7051,"ref_ms":0.8225,"sp":1.169,"verdict":"faster"},{"logits":262144000,"classes":32000,"shape":"8,192 \u00d7 32,000","lib_ms":1.246,"ref_ms":1.697,"sp":1.363,"verdict":"faster"},{"logits":1050673152,"classes":128256,"shape":"8,192 \u00d7 128,256","lib_ms":4.709,"ref_ms":6.107,"sp":1.296,"verdict":"faster"}],"fp32":[{"logits":1024000,"classes":32000,"shape":"32 \u00d7 32,000","lib_ms":0.07548,"ref_ms":0.07775,"sp":1.056,"verdict":"faster"},{"logits":1026048,"classes":128256,"shape":"8 \u00d7 128,256","lib_ms":0.07536,"ref_ms":0.08944,"sp":1.096,"verdict":"neither"},{"logits":1048000,"classes":1000,"shape":"1,048 \u00d7 1,000","lib_ms":0.08855,"ref_ms":0.09142,"sp":1.052,"verdict":"faster"},{"logits":1048500,"classes":100,"shape":"10,485 \u00d7 100","lib_ms":0.09959,"ref_ms":0.1051,"sp":1.045,"verdict":"neither"},{"logits":1048570,"classes":10,"shape":"104,857 \u00d7 10","lib_ms":0.09923,"ref_ms":0.1013,"sp":1.025,"verdict":"neither"},{"logits":1048576,"classes":4096,"shape":"256 \u00d7 4,096","lib_ms":0.09913,"ref_ms":0.103,"sp":1.039,"verdict":"neither"},{"logits":2140712,"classes":21844,"shape":"98 \u00d7 21,844","lib_ms":0.07461,"ref_ms":0.08725,"sp":1.18,"verdict":"faster"},{"logits":2283732,"classes":237,"shape":"9,636 \u00d7 237","lib_ms":0.103,"ref_ms":0.1064,"sp":1.034,"verdict":"faster"},{"logits":2475531,"classes":9,"shape":"275,059 \u00d7 9","lib_ms":0.1002,"ref_ms":0.1069,"sp":1.061,"verdict":"faster"},{"logits":2532762,"classes":1054,"shape":"2,403 \u00d7 1,054","lib_ms":0.0831,"ref_ms":0.08594,"sp":1.012,"verdict":"neither"},{"logits":2609332,"classes":124,"shape":"21,043 \u00d7 124","lib_ms":0.101,"ref_ms":0.1052,"sp":1.043,"verdict":"faster"},{"logits":3124598,"classes":3134,"shape":"997 \u00d7 3,134","lib_ms":0.1103,"ref_ms":0.1116,"sp":1.023,"verdict":"neither"},{"logits":3637623,"classes":3993,"shape":"911 \u00d7 3,993","lib_ms":0.08605,"ref_ms":0.08557,"sp":1.017,"verdict":"neither"},{"logits":4258935,"classes":59985,"shape":"71 \u00d7 59,985","lib_ms":0.06937,"ref_ms":0.08516,"sp":1.248,"verdict":"faster"},{"logits":4864998,"classes":1317,"shape":"3,694 \u00d7 1,317","lib_ms":0.1103,"ref_ms":0.1077,"sp":0.9892,"verdict":"neither"},{"logits":5317620,"classes":40285,"shape":"132 \u00d7 40,285","lib_ms":0.08091,"ref_ms":0.08282,"sp":1.024,"verdict":"neither"},{"logits":6440664,"classes":7253,"shape":"888 \u00d7 7,253","lib_ms":0.07665,"ref_ms":0.08675,"sp":1.13,"verdict":"faster"},{"logits":6806842,"classes":14,"shape":"486,203 \u00d7 14","lib_ms":0.1018,"ref_ms":0.1227,"sp":1.207,"verdict":"faster"},{"logits":8121537,"classes":1073,"shape":"7,569 \u00d7 1,073","lib_ms":0.1098,"ref_ms":0.1226,"sp":1.073,"verdict":"neither"},{"logits":8336640,"classes":128256,"shape":"65 \u00d7 128,256","lib_ms":0.09545,"ref_ms":0.1267,"sp":1.33,"verdict":"faster"},{"logits":8384000,"classes":32000,"shape":"262 \u00d7 32,000","lib_ms":0.1024,"ref_ms":0.1347,"sp":1.326,"verdict":"faster"},{"logits":8388000,"classes":1000,"shape":"8,388 \u00d7 1,000","lib_ms":0.09804,"ref_ms":0.1263,"sp":1.278,"verdict":"faster"},{"logits":8388600,"classes":10,"shape":"838,860 \u00d7 10","lib_ms":0.1247,"ref_ms":0.1646,"sp":1.316,"verdict":"faster"},{"logits":8388600,"classes":100,"shape":"83,886 \u00d7 100","lib_ms":0.1075,"ref_ms":0.133,"sp":1.18,"verdict":"faster"},{"logits":8388608,"classes":4096,"shape":"2,048 \u00d7 4,096","lib_ms":0.08837,"ref_ms":0.1228,"sp":1.377,"verdict":"faster"},{"logits":8454144,"classes":129,"shape":"65,536 \u00d7 129","lib_ms":0.1088,"ref_ms":0.1594,"sp":1.451,"verdict":"faster"},{"logits":8596553,"classes":117761,"shape":"73 \u00d7 117,761","lib_ms":0.09764,"ref_ms":0.1398,"sp":1.433,"verdict":"faster"},{"logits":9020536,"classes":8156,"shape":"1,106 \u00d7 8,156","lib_ms":0.1045,"ref_ms":0.1349,"sp":1.278,"verdict":"faster"},{"logits":14285458,"classes":11,"shape":"1,298,678 \u00d7 11","lib_ms":0.2316,"ref_ms":0.295,"sp":1.274,"verdict":"faster"},{"logits":14617009,"classes":73,"shape":"200,233 \u00d7 73","lib_ms":0.2482,"ref_ms":0.2611,"sp":1.048,"verdict":"faster"},{"logits":16887843,"classes":3801,"shape":"4,443 \u00d7 3,801","lib_ms":0.1804,"ref_ms":0.2311,"sp":1.276,"verdict":"faster"},{"logits":52368377,"classes":1447,"shape":"36,191 \u00d7 1,447","lib_ms":0.5523,"ref_ms":0.6569,"sp":1.19,"verdict":"faster"},{"logits":67077888,"classes":128256,"shape":"523 \u00d7 128,256","lib_ms":0.6201,"ref_ms":0.8137,"sp":1.315,"verdict":"faster"},{"logits":67104000,"classes":32000,"shape":"2,097 \u00d7 32,000","lib_ms":0.6402,"ref_ms":0.9126,"sp":1.435,"verdict":"faster"},{"logits":67108000,"classes":1000,"shape":"67,108 \u00d7 1,000","lib_ms":0.6301,"ref_ms":0.8165,"sp":1.297,"verdict":"faster"},{"logits":67108800,"classes":100,"shape":"671,088 \u00d7 100","lib_ms":0.6776,"ref_ms":0.9693,"sp":1.431,"verdict":"faster"},{"logits":67108860,"classes":10,"shape":"6,710,886 \u00d7 10","lib_ms":0.9138,"ref_ms":1.229,"sp":1.344,"verdict":"faster"},{"logits":67108864,"classes":4096,"shape":"16,384 \u00d7 4,096","lib_ms":0.6186,"ref_ms":0.7987,"sp":1.293,"verdict":"faster"},{"logits":128657920,"classes":50257,"shape":"2,560 \u00d7 50,257","lib_ms":1.144,"ref_ms":1.557,"sp":1.362,"verdict":"faster"},{"logits":131072000,"classes":32000,"shape":"4,096 \u00d7 32,000","lib_ms":1.165,"ref_ms":1.563,"sp":1.335,"verdict":"faster"},{"logits":262144000,"classes":32000,"shape":"8,192 \u00d7 32,000","lib_ms":2.348,"ref_ms":3.103,"sp":1.321,"verdict":"faster"},{"logits":1050673152,"classes":128256,"shape":"8,192 \u00d7 128,256","lib_ms":9.122,"ref_ms":12.05,"sp":1.321,"verdict":"faster"}]}}},"limit":{"bf16":4.519,"fp32":8.656},"per_loss":{"torch":{"bf16":[{"loss":"cross_entropy","label":"Cross-entropy","lib_ps":4.793,"ref_ps":4.889,"sp":1.015,"verdict":"neither","composition":false},{"loss":"ce_weighted_smoothing","label":"CE + weights + smooth","lib_ps":10.16,"ref_ps":11.75,"sp":1.156,"verdict":"faster","composition":false},{"loss":"ce_probs","label":"Probability-target CE","lib_ps":7.54,"ref_ps":7.461,"sp":0.985,"verdict":"neither","composition":false},{"loss":"topk_ce","label":"Top-5 cross-entropy","lib_ps":8.484,"ref_ps":72.66,"sp":8.583,"verdict":"faster","composition":true},{"loss":"multiclass_hinge","label":"Multiclass hinge","lib_ps":4.125,"ref_ps":14.29,"sp":3.466,"verdict":"faster","composition":true},{"loss":"smooth_hinge","label":"Smooth hinge","lib_ps":9.388,"ref_ps":177.7,"sp":18.91,"verdict":"faster","composition":true},{"loss":"topk_hinge_alpha","label":"Top-5 hinge \u03b1","lib_ps":6.17,"ref_ps":51.34,"sp":8.292,"verdict":"faster","composition":true},{"loss":"topk_hinge_beta_nonsmooth","label":"Top-5 hinge \u03b2","lib_ps":6.512,"ref_ps":46.71,"sp":7.173,"verdict":"faster","composition":true},{"loss":"multilabel_ce","label":"Multilabel CE","lib_ps":7.869,"ref_ps":8.63,"sp":1.095,"verdict":"faster","composition":false},{"loss":"multilabel_hinge","label":"Multilabel hinge","lib_ps":6.361,"ref_ps":8.432,"sp":1.326,"verdict":"faster","composition":true},{"loss":"distillation","label":"Distillation","lib_ps":15.43,"ref_ps":26.14,"sp":1.696,"verdict":"faster","composition":false}],"fp32":[{"loss":"cross_entropy","label":"Cross-entropy","lib_ps":8.874,"ref_ps":9.23,"sp":1.04,"verdict":"faster","composition":false},{"loss":"ce_weighted_smoothing","label":"CE + weights + smooth","lib_ps":10.72,"ref_ps":16.74,"sp":1.56,"verdict":"faster","composition":false},{"loss":"ce_probs","label":"Probability-target CE","lib_ps":16.5,"ref_ps":14.46,"sp":0.8756,"verdict":"slower","composition":false},{"loss":"topk_ce","label":"Top-5 cross-entropy","lib_ps":10.75,"ref_ps":74.03,"sp":6.9,"verdict":"faster","composition":true},{"loss":"multiclass_hinge","label":"Multiclass hinge","lib_ps":6.043,"ref_ps":25.9,"sp":4.293,"verdict":"faster","composition":true},{"loss":"smooth_hinge","label":"Smooth hinge","lib_ps":11.51,"ref_ps":185.4,"sp":16.12,"verdict":"faster","composition":true},{"loss":"topk_hinge_alpha","label":"Top-5 hinge \u03b1","lib_ps":8.168,"ref_ps":53.88,"sp":6.598,"verdict":"faster","composition":true},{"loss":"topk_hinge_beta_nonsmooth","label":"Top-5 hinge \u03b2","lib_ps":8.015,"ref_ps":47.19,"sp":5.887,"verdict":"faster","composition":true},{"loss":"multilabel_ce","label":"Multilabel CE","lib_ps":12.28,"ref_ps":12.31,"sp":1.004,"verdict":"neither","composition":false},{"loss":"multilabel_hinge","label":"Multilabel hinge","lib_ps":7.33,"ref_ps":12.26,"sp":1.674,"verdict":"faster","composition":true},{"loss":"distillation","label":"Distillation","lib_ps":19.15,"ref_ps":43.98,"sp":2.299,"verdict":"faster","composition":false}]},"jax":{"bf16":[{"loss":"cross_entropy","label":"Cross-entropy","lib_ps":4.728,"ref_ps":6.424,"sp":1.359,"verdict":"faster","composition":false},{"loss":"ce_weighted_smoothing","label":"CE + weights + smooth","lib_ps":6.793,"ref_ps":16.45,"sp":2.422,"verdict":"faster","composition":true},{"loss":"ce_probs","label":"Probability-target CE","lib_ps":7.536,"ref_ps":9.108,"sp":1.206,"verdict":"faster","composition":false},{"loss":"topk_ce","label":"Top-5 cross-entropy","lib_ps":8.113,"ref_ps":77.07,"sp":9.519,"verdict":"faster","composition":true},{"loss":"multiclass_hinge","label":"Multiclass hinge","lib_ps":4.188,"ref_ps":6.082,"sp":1.452,"verdict":"faster","composition":false},{"loss":"smooth_hinge","label":"Smooth hinge","lib_ps":9.14,"ref_ps":155.8,"sp":16.97,"verdict":"faster","composition":true},{"loss":"topk_hinge_alpha","label":"Top-5 hinge \u03b1","lib_ps":6.043,"ref_ps":63.35,"sp":10.45,"verdict":"faster","composition":true},{"loss":"topk_hinge_beta_nonsmooth","label":"Top-5 hinge \u03b2","lib_ps":6.478,"ref_ps":63.35,"sp":9.757,"verdict":"faster","composition":true},{"loss":"multilabel_ce","label":"Multilabel CE","lib_ps":7.814,"ref_ps":8.809,"sp":1.127,"verdict":"faster","composition":false},{"loss":"multilabel_hinge","label":"Multilabel hinge","lib_ps":6.383,"ref_ps":10.52,"sp":1.643,"verdict":"faster","composition":true},{"loss":"distillation","label":"Distillation","lib_ps":15.43,"ref_ps":13.44,"sp":0.8714,"verdict":"slower","composition":false}],"fp32":[{"loss":"cross_entropy","label":"Cross-entropy","lib_ps":8.886,"ref_ps":11.92,"sp":1.335,"verdict":"faster","composition":false},{"loss":"ce_weighted_smoothing","label":"CE + weights + smooth","lib_ps":9.324,"ref_ps":23.26,"sp":2.495,"verdict":"faster","composition":true},{"loss":"ce_probs","label":"Probability-target CE","lib_ps":16.53,"ref_ps":17.3,"sp":1.05,"verdict":"faster","composition":false},{"loss":"topk_ce","label":"Top-5 cross-entropy","lib_ps":10.81,"ref_ps":73.34,"sp":6.797,"verdict":"faster","composition":true},{"loss":"multiclass_hinge","label":"Multiclass hinge","lib_ps":6.042,"ref_ps":10.6,"sp":1.754,"verdict":"faster","composition":false},{"loss":"smooth_hinge","label":"Smooth hinge","lib_ps":11.39,"ref_ps":155.7,"sp":13.66,"verdict":"faster","composition":true},{"loss":"topk_hinge_alpha","label":"Top-5 hinge \u03b1","lib_ps":8.129,"ref_ps":59.85,"sp":7.357,"verdict":"faster","composition":true},{"loss":"topk_hinge_beta_nonsmooth","label":"Top-5 hinge \u03b2","lib_ps":8.227,"ref_ps":59.97,"sp":7.288,"verdict":"faster","composition":true},{"loss":"multilabel_ce","label":"Multilabel CE","lib_ps":12.23,"ref_ps":14.27,"sp":1.165,"verdict":"faster","composition":false},{"loss":"multilabel_hinge","label":"Multilabel hinge","lib_ps":7.319,"ref_ps":14.21,"sp":1.941,"verdict":"faster","composition":true},{"loss":"distillation","label":"Distillation","lib_ps":19.28,"ref_ps":24.23,"sp":1.257,"verdict":"faster","composition":false}]}}}};
      const SVGNS = "http://www.w3.org/2000/svg";
      const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const C = {
        lib: "#1a5fb4", libLight: "#62a0ea", libDark: "#0b3a75", libCpu: "#3584e4",  /* libCpu: .bar-fill.is-cpu */
        unfixed: "#d9480f", unfixedLight: "#f4a261", unfixedDark: "#8a2c05",
        fixed: "#b7791f", ref: "#495057", hinge: "#2b8a3e", hingeLight: "#74b816",
        alpha: "#7048e8", prox: "#9c36b5", stable: "#868e96", kernel: "#0c8599", base: "#495057",
        /* text of curve labels next to light lines; the weight-decay ramp of the hinge, light to dark */
        unfixedText: "#c2681c", hingeRamp: ["#74c476", "#41ab5d", "#2b8a3e", "#00441b"]
      };

      /* ---------- DOM helpers ---------- */
      function el(tag, attrs, ...kids) {
        const node = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs || {})) {
          if (v === null || v === undefined || v === false) continue;
          if (k === "text") node.textContent = v;
          else node.setAttribute(k, v === true ? "" : v);
        }
        for (const kid of kids.flat()) {
          if (kid !== null && kid !== undefined && kid !== false) node.append(kid);
        }
        return node;
      }
      function svg(tag, attrs, parent) {
        const node = document.createElementNS(SVGNS, tag);
        for (const [k, v] of Object.entries(attrs || {})) {
          if (v !== null && v !== undefined) node.setAttribute(k, v);
        }
        if (parent) parent.append(node);
        return node;
      }
      const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
      /* A time per logit in ps: the time of a call divided by the number of logits. */
      const perLogit = (ms, logits) => ms * 1e9 / logits;
      const psText = v => v >= 100 ? String(Math.round(v)) : v.toFixed(1);

      /* ---------- Number formatting ---------- */
      const SUPS = { "-": "\u207b", "0": "\u2070", "1": "\u00b9", "2": "\u00b2", "3": "\u00b3", "4": "\u2074",
                     "5": "\u2075", "6": "\u2076", "7": "\u2077", "8": "\u2078", "9": "\u2079" };
      const sup = n => String(n).replace(/[-0-9]/g, c => SUPS[c]);
      function pow10(v) {
        const e = Math.round(Math.log10(v));
        return e === 0 ? "1" : e === 1 ? "10" : "10" + sup(e);
      }
      /* Three significant digits with trailing zeros kept (1.60, not 1.6), for speedup factors. */
      function sig3(v) {
        return v >= 100 ? Math.round(v).toLocaleString("en-US") : v.toPrecision(3);
      }
      function num(v, digits) {
        digits = digits || 3;
        if (v === null || v === undefined || Number.isNaN(v)) return "\u2013";
        if (v === 0) return "0";
        const a = Math.abs(v);
        if (a >= 1e-3 && a < 1e6) {
          return Number(v.toPrecision(digits)).toLocaleString("en-US", { maximumFractionDigits: 8 });
        }
        let e = Math.floor(Math.log10(a));
        let m = Number((v / Math.pow(10, e)).toPrecision(digits));
        if (Math.abs(m) >= 10) { m = Number((m / 10).toPrecision(digits)); e += 1; }
        return m + "\u00d710" + sup(e);
      }

      /* ---------- Scales and ticks ---------- */
      function scale(type, domain, range) {
        const [d0, d1] = domain, [r0, r1] = range;
        if (type === "log") {
          const l0 = Math.log10(d0), l1 = Math.log10(d1);
          const f = v => r0 + (Math.log10(v) - l0) / (l1 - l0) * (r1 - r0);
          f.inv = p => Math.pow(10, l0 + (p - r0) / (r1 - r0) * (l1 - l0));
          return f;
        }
        const f = v => r0 + (v - d0) / (d1 - d0) * (r1 - r0);
        f.inv = p => d0 + (p - r0) / (r1 - r0) * (d1 - d0);
        return f;
      }
      function linearTicks(lo, hi, n) {
        const span = hi - lo;
        if (!(span > 0)) return [lo];
        const raw = span / (n || 5);
        const mag = Math.pow(10, Math.floor(Math.log10(raw)));
        const err = raw / mag;
        const step = (err >= 7.5 ? 10 : err >= 3.5 ? 5 : err >= 1.5 ? 2 : 1) * mag;
        const out = [];
        for (let v = Math.ceil(lo / step - 1e-9) * step; v <= hi + step * 1e-9; v += step) {
          out.push(Math.abs(v) < step * 1e-9 ? 0 : Number(v.toPrecision(12)));
        }
        return out;
      }
      function logTicks(lo, hi, maxN) {
        const a = Math.min(lo, hi), b = Math.max(lo, hi);
        const e0 = Math.ceil(Math.log10(a) - 1e-9), e1 = Math.floor(Math.log10(b) + 1e-9);
        let step = 1;
        while ((e1 - e0) / step + 1 > (maxN || 7)) step += 1;
        const out = [];
        for (let e = Math.ceil(e0 / step) * step; e <= e1; e += step) out.push(Math.pow(10, e));
        return out;
      }

      /* ---------- Tooltip ---------- */
      const tip = document.getElementById("chart-tooltip");
      function showTip(clientX, clientY, head, rows, note) {
        tip.textContent = "";
        tip.append(el("div", { class: "tt-head", text: head }));
        for (const r of rows) {
          const sw = el("span", { class: "tt-swatch" });
          sw.style.background = r.color || "transparent";
          tip.append(el("div", { class: "tt-row" }, el("span", { class: "tt-key" }, sw, r.label),
                        el("span", { class: "tt-val", text: r.value })));
        }
        if (note) tip.append(el("div", { class: "tt-note", text: note }));
        tip.hidden = false;
        const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
        let left = clientX + pad, top = clientY + pad;
        if (left + w > window.innerWidth - 8) left = clientX - pad - w;
        if (top + h > window.innerHeight - 8) top = clientY - pad - h;
        tip.style.left = Math.max(8, left) + "px";
        tip.style.top = Math.max(8, top) + "px";
      }
      function hideTip() { tip.hidden = true; }

      /* ---------- Figure scaffolding ---------- */
      const figures = [];
      function setupFigure(key, build) {
        const mount = document.getElementById("chart-" + key);
        if (!mount) return;
        mount.textContent = "";
        const fig = { mount, revealed: REDUCED || !("IntersectionObserver" in window), animators: [], width: 0 };
        try {
          build(fig);
        } catch (err) {
          mount.textContent = "";
          mount.append(el("p", { class: "chart-noscript", text: "This figure could not be drawn in this browser." }));
          if (window.console) console.error(err);
          return;
        }
        fig.width = mount.clientWidth;
        figures.push(fig);
        if (!fig.revealed) {
          const io = new IntersectionObserver(entries => {
            if (entries.some(e => e.isIntersecting)) { io.disconnect(); reveal(fig); }
          }, { threshold: 0.2 });
          io.observe(mount);
        }
      }
      function reveal(fig) {
        fig.revealed = true;
        const start = performance.now(), dur = 1100;
        const step = now => {
          const t = clamp((now - start) / dur, 0, 1), e = 1 - Math.pow(1 - t, 3);  /* a frame can be stamped before start */
          fig.animators.forEach(fn => fn(e));
          if (t < 1) requestAnimationFrame(step); else fig.animators = [];
        };
        requestAnimationFrame(step);
      }
      let resizeTimer = null;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          for (const fig of figures) {
            const w = fig.mount.clientWidth;
            if (w !== fig.width && fig.rerender) { fig.width = w; fig.rerender(); }
          }
        }, 150);
      });
      function frame(fig, opts) {
        const head = el("div", { class: "chart-head" }, el("p", { class: "chart-title", text: opts.title }),
                        opts.subtitle ? el("p", { class: "chart-sub", text: opts.subtitle }) : null);
        const controls = el("div", { class: "chart-controls" });
        const body = el("div", { class: "chart-body" });
        fig.mount.append(head, controls, body);
        return { controls, body };
      }
      function panelGrid(body, n) {
        const grid = el("div", { class: "chart-panels", "data-cols": String(n) });
        body.append(grid);
        return Array.from({ length: n }, () => { const p = el("div", { class: "chart-panel" }); grid.append(p); return p; });
      }
      function pills(label, options, value, onChange) {
        const wrap = el("div", { class: "pills" });
        for (const opt of options) {
          const on = opt.value === value;
          const b = el("button", { type: "button", class: "pill" + (on ? " is-active" : ""), "aria-pressed": String(on), text: opt.label });
          b.addEventListener("click", () => {
            wrap.querySelectorAll(".pill").forEach(p => {
              p.classList.toggle("is-active", p === b);
              p.setAttribute("aria-pressed", String(p === b));
            });
            onChange(opt.value);
          });
          wrap.append(b);
        }
        return el("div", { class: "control-group" }, el("span", { class: "control-label", text: label }), wrap);
      }
      function applyFocus(container, id) {
        container.classList.toggle("has-focus", Boolean(id));
        container.querySelectorAll("[data-series]").forEach(n => {
          n.classList.toggle("is-dim", Boolean(id) && n.getAttribute("data-series") !== id);
        });
      }
      function legend(items, state, container, onToggle) {
        const grouped = items.some(it => it.group);
        const box = el("div", { class: "chart-legend" + (grouped ? " is-grouped" : "") });
        let row = box, lastGroup = null;
        for (const it of items) {
          if (grouped && it.group !== lastGroup) {  /* one row per group, with its name in front */
            lastGroup = it.group;
            row = el("div", { class: "legend-group" }, el("span", { class: "legend-group-label", text: it.group }));
            box.append(row);
          }
          const off = state.hidden.has(it.id);
          const sw = el("span", { class: "legend-swatch" + (it.dash ? (it.dash.startsWith("1 ") ? " is-dotted" : " is-dashed") : "") });
          sw.style.borderTopColor = it.color;
          const b = el("button", { type: "button", class: "legend-item" + (off ? " is-off" : ""), "aria-pressed": String(!off),
                               title: off ? "Click to show" : "Click to hide" }, sw, it.label);
          b.addEventListener("click", () => {
            if (state.hidden.has(it.id)) state.hidden.delete(it.id); else state.hidden.add(it.id);
            onToggle();
          });
          const focusOn = () => { if (!state.hidden.has(it.id)) applyFocus(container(), it.id); };
          const focusOff = () => applyFocus(container(), null);
          b.addEventListener("mouseenter", focusOn);
          b.addEventListener("mouseleave", focusOff);
          b.addEventListener("focus", focusOn);
          b.addEventListener("blur", focusOff);
          row.append(b);
        }
        return box;
      }

      /* ---------- Line chart ---------- */
      let chartUid = 0;
      function lineChart(parent, fig, cfg) {
        const width = Math.max(240, Math.floor(parent.clientWidth || 600));
        const height = cfg.height || Math.round(clamp(width * 0.64, 210, 330));
        const m = Object.assign({ t: 16, r: 18, b: 42, l: 54 }, cfg.margin || {});
        const floorH = cfg.y.zeroFloor ? 22 : 0;
        const x0 = m.l, x1 = width - m.r, yTop = m.t, yBottom = height - m.b, yLogBottom = yBottom - floorH;
        const floorY = yBottom - floorH / 2;
        const X = scale(cfg.x.type, cfg.x.domain, [x0, x1]);
        const Y = scale(cfg.y.type, cfg.y.domain, [yLogBottom, yTop]);
        const yMin = Math.min(cfg.y.domain[0], cfg.y.domain[1]);
        const ypx = v => {
          if (v === null || v === undefined || Number.isNaN(v)) return null;
          if (cfg.y.type === "log" && v <= 0) return cfg.y.zeroFloor ? floorY : null;
          if (cfg.y.type === "log" && v < yMin) return yLogBottom;
          return Y(v);
        };
        const xpx = v => (cfg.x.type === "log" && v <= 0) ? null : X(v);
        const uid = "clip-" + (++chartUid);
        const root = svg("svg", { class: "chart", viewBox: "0 0 " + width + " " + height, width, height,
                                   role: "img", "aria-label": cfg.ariaLabel || "", tabindex: "0" });
        const defs = svg("defs", {}, root);
        const clip = svg("clipPath", { id: uid }, defs);
        const clipRect = svg("rect", { x: x0 - 4, y: yTop - 8, width: Math.max(0, x1 - x0 + 8), height: Math.max(0, yBottom - yTop + 12) }, clip);

        /* grid and y axis */
        const yTicks = cfg.y.ticks || (cfg.y.type === "log" ? logTicks(cfg.y.domain[0], cfg.y.domain[1], cfg.y.maxTicks || 6)
                                                            : linearTicks(cfg.y.domain[0], cfg.y.domain[1], 5));
        const grid = svg("g", {}, root);
        const yAxis = svg("g", {}, root);
        for (const t of yTicks) {
          const py = Y(t);
          if (py < yTop - 1 || py > yLogBottom + 1) continue;
          svg("line", { class: "grid-line", x1: x0, x2: x1, y1: py, y2: py }, grid);
          const g = svg("g", { class: "tick" }, yAxis);
          svg("text", { x: x0 - 8, y: py, "text-anchor": "end", "dominant-baseline": "middle" }, g).textContent =
            cfg.y.tickFormat ? cfg.y.tickFormat(t) : (cfg.y.type === "log" ? pow10(t) : num(t, 4));
        }
        if (cfg.y.zeroFloor) {
          svg("line", { class: "floor-sep", x1: x0, x2: x1, y1: yLogBottom + 4, y2: yLogBottom + 4 }, grid);
          const g = svg("g", { class: "tick" }, yAxis);
          svg("text", { x: x0 - 8, y: floorY, "text-anchor": "end", "dominant-baseline": "middle" }, g).textContent = "0";
        }
        svg("line", { class: "axis-line", x1: x0, x2: x1, y1: yBottom, y2: yBottom }, root);
        if (cfg.y.label) {
          const midY = yTop + (yBottom - yTop) / 2;
          svg("text", { class: "axis-label", x: 11, y: midY, "text-anchor": "middle", "dominant-baseline": "middle",
                        transform: "rotate(-90 11 " + midY + ")" }, root).textContent = cfg.y.label;
        }

        /* x axis */
        const xTicks = cfg.x.ticks || (cfg.x.type === "log" ? logTicks(cfg.x.domain[0], cfg.x.domain[1], cfg.x.maxTicks || 6)
                                                            : linearTicks(cfg.x.domain[0], cfg.x.domain[1], cfg.x.count || 6));
        const xAxis = svg("g", {}, root);
        for (const t of xTicks) {
          const px = X(t);
          if (px < x0 - 1 || px > x1 + 1) continue;
          const g = svg("g", { class: "tick" }, xAxis);
          svg("line", { class: "axis-line", x1: px, x2: px, y1: yBottom, y2: yBottom + 4 }, g);
          svg("text", { x: px, y: yBottom + 16, "text-anchor": "middle" }, g).textContent =
            cfg.x.tickFormat ? cfg.x.tickFormat(t) : (cfg.x.type === "log" ? pow10(t) : num(t, 4));
        }
        if (cfg.x.label) {
          svg("text", { class: "axis-label", x: x0 + (x1 - x0) / 2, y: height - 6, "text-anchor": "middle" }, root).textContent = cfg.x.label;
        }
        /* an optional second x axis on top: [position in the units of the x axis, text] pairs */
        if (cfg.x.top) {
          svg("line", { class: "axis-line", x1: x0, x2: x1, y1: yTop, y2: yTop }, xAxis);
          for (const [t, text] of cfg.x.top.ticks) {
            const px = X(t);
            if (px < x0 - 1 || px > x1 + 1) continue;
            const g = svg("g", { class: "tick" }, xAxis);
            svg("line", { class: "axis-line", x1: px, x2: px, y1: yTop - 4, y2: yTop }, g);
            svg("text", { x: px, y: yTop - 8, "text-anchor": "middle" }, g).textContent = text;
          }
          if (cfg.x.top.label) {
            svg("text", { class: "axis-label", x: x0 + (x1 - x0) / 2, y: 11, "text-anchor": "middle" }, root).textContent = cfg.x.top.label;
          }
        }

        /* bands and reference lines */
        const refs = svg("g", {}, root);
        for (const b of cfg.bands || []) {
          const a = X(b.x0), c = X(b.x1);
          const rect = svg("rect", { class: "band", x: Math.min(a, c), y: yTop, width: Math.abs(c - a), height: yBottom - yTop }, refs);
          if (b.fill) { rect.style.fill = b.fill; rect.style.opacity = b.opacity || 0.15; }
          if (b.label) {
            const beside = b.labelSide === "left";
            svg("text", { class: "ref-label", x: beside ? Math.min(a, c) - 5 : Math.min(a, c) + 4, y: yTop + (b.labelDy || 11),
                          "text-anchor": beside ? "end" : "start" }, refs).textContent = b.label;
          }
        }
        for (const h of cfg.hlines || []) {
          const py = ypx(h.y);
          if (py === null || py < yTop - 1 || py > yBottom) continue;
          svg("line", { class: "ref-line", x1: x0, x2: x1, y1: py, y2: py, "stroke-dasharray": h.dash || "4 3",
                        stroke: h.color || null }, refs);
          if (h.label && h.outside) {
            svg("text", { class: "ref-label", x: x1 + 6, y: py, "dominant-baseline": "middle" }, refs).textContent = h.label;
          } else if (h.label) {
            svg("text", { class: "ref-label", x: h.left ? x0 + 4 : x1 - 2, y: py - 5, "text-anchor": h.left ? "start" : "end" }, refs).textContent = h.label;
          }
        }
        for (const v of cfg.vlines || []) {
          const px = X(v.x);
          if (px < x0 || px > x1) continue;
          svg("line", { class: "ref-line", x1: px, x2: px, y1: yTop, y2: yBottom, "stroke-dasharray": v.dash || "4 3",
                        stroke: v.color || null }, refs);
          if (v.label) {
            const right = v.anchor === "end";
            const ly = v.labelAt === "bottom" ? yBottom - 7 : (v.labelY || yTop + 24);
            svg("text", { class: "ref-label", x: right ? px - 4 : px + 4, y: ly, "text-anchor": right ? "end" : "start" }, refs).textContent = v.label;
          }
        }

        for (const sp of cfg.spans || []) {
          const a = X(sp.x0), c = X(sp.x1), py = ypx(sp.y);
          svg("path", { class: "span-arrow", d: "M" + (a + 6) + " " + (py - 4) + "L" + a + " " + py + "L" + (a + 6) + " " + (py + 4)
                        + "M" + a + " " + py + "L" + c + " " + py + "M" + (c - 6) + " " + (py - 4) + "L" + c + " " + py + "L" + (c - 6) + " " + (py + 4) }, refs);
          svg("text", { class: "span-label", x: (a + c) / 2, y: py - 7, "text-anchor": "middle" }, refs).textContent = sp.label;
        }

        /* series */
        const layer = svg("g", { "clip-path": "url(#" + uid + ")" }, root);
        for (const s of cfg.series) {
          if (!s.band || !s.band.length) continue;
          let seg = [], bandD = "";
          const flushBand = () => {
            if (seg.length > 1) {
              bandD += "M" + seg.map(q => q.px.toFixed(1) + " " + q.hi.toFixed(1)).join("L")
                     + "L" + seg.slice().reverse().map(q => q.px.toFixed(1) + " " + q.lo.toFixed(1)).join("L") + "Z";
            }
            seg = [];
          };
          for (const b of s.band) {
            const px = xpx(b[0]), lo = ypx(b[1]), hi = ypx(b[2]);
            if (px === null || lo === null || hi === null) { flushBand(); continue; }
            seg.push({ px, lo, hi });
          }
          flushBand();
          if (bandD && s.band.some(b => b[2] > b[1])) {
            svg("path", { class: "series-band", d: bandD, fill: s.color, "fill-opacity": s.bandOpacity || 0.16,
                          "data-series": s.id }, layer);
          }
        }
        const prepared = [];
        for (const s of cfg.series) {
          const pts = [];
          for (const p of s.points || []) {
            const px = xpx(p[0]), py = ypx(p[1]);
            pts.push({ x: p[0], y: p[1], px, py });
          }
          let d = "", pen = false;
          for (const p of pts) {
            if (p.px === null || p.py === null) { pen = false; continue; }
            d += (pen ? "L" : "M") + p.px.toFixed(1) + " " + p.py.toFixed(1);
            pen = true;
          }
          svg("path", { class: "series-path", d, stroke: s.color, "stroke-width": s.width || 1.9,
                        "stroke-dasharray": s.dash || null, "data-series": s.id }, layer);
          if (cfg.showPoints) {
            for (const p of pts) {
              if (p.px === null || p.py === null) continue;
              svg("circle", { class: "series-dot", cx: p.px, cy: p.py, r: 3, fill: s.color, "data-series": s.id }, layer);
            }
          }
          prepared.push({ s, pts: pts.filter(p => p.px !== null && p.py !== null) });
        }
        const marks = svg("g", {}, root);
        for (const mk of cfg.markers || []) {
          const px = X(mk.x);
          if (px < x0 - 2 || px > x1 + 2) continue;
          const py = mk.y === undefined ? yBottom - 1 : ypx(mk.y);
          svg("path", { d: "M" + px + " " + (py - 8) + "l5 8h-10z", fill: mk.color, "data-series": mk.series || null }, marks);
        }

        /* direct labels of curves, in data coordinates */
        for (const lb of cfg.labels || []) {
          const px = xpx(lb.x), py = ypx(lb.y);
          if (px === null || py === null) continue;
          svg("text", { class: "curve-label", x: px + (lb.dx || 0), y: py + (lb.dy === undefined ? -7 : lb.dy),
                        "text-anchor": lb.anchor || "middle", fill: lb.color || null }, root).textContent = lb.text;
        }

        /* hover layer */
        const hover = svg("g", { display: "none" }, root);
        const cross = svg("line", { class: "crosshair", y1: yTop, y2: yBottom }, hover);
        const dots = prepared.map(p => svg("circle", { class: "hover-dot", r: 4, fill: p.s.color }, hover));
        const hit = svg("rect", { x: x0, y: yTop, width: Math.max(0, x1 - x0), height: Math.max(0, yBottom - yTop), fill: "transparent" }, root);
        function nearest(pts, px) {
          let lo = 0, hi = pts.length - 1;
          if (hi < 0) return null;
          const asc = pts[hi].px >= pts[0].px;
          while (hi - lo > 1) {
            const mid = (lo + hi) >> 1;
            if ((pts[mid].px < px) === asc) lo = mid; else hi = mid;
          }
          return Math.abs(pts[lo].px - px) <= Math.abs(pts[hi].px - px) ? pts[lo] : pts[hi];
        }
        const stops = Array.from(new Set(prepared.flatMap(p => p.pts.map(q => Math.round(q.px * 10) / 10))))
          .filter(v => v >= x0 - 0.5 && v <= x1 + 0.5).sort((a, b) => a - b);
        let lastPx = null;
        function draw(px, client, sync) {
          if (px === null) { hover.setAttribute("display", "none"); hideTip(); lastPx = null; return; }
          px = clamp(px, x0, x1);
          let best = null;
          for (const p of prepared) {
            const n = nearest(p.pts, px);
            if (n && (!best || Math.abs(n.px - px) < Math.abs(best.px - px))) best = n;
          }
          if (!best) return;
          const snap = best.px;
          lastPx = snap;
          cross.setAttribute("x1", snap); cross.setAttribute("x2", snap);
          const rows = [];
          prepared.forEach((p, i) => {
            const n = nearest(p.pts, snap);
            if (!n || Math.abs(n.px - snap) > Math.max(6, (x1 - x0) * 0.02)) { dots[i].setAttribute("visibility", "hidden"); return; }
            dots[i].setAttribute("visibility", "visible");
            dots[i].setAttribute("cx", n.px); dots[i].setAttribute("cy", n.py);
            rows.push({ label: p.s.label, color: p.s.color, value: cfg.value ? cfg.value(n.y, p.s, n.x) : num(n.y, 3), y: n.y });
          });
          hover.removeAttribute("display");
          if (!sync) {
            if (cfg.sortRows) rows.sort((a, b) => b.y - a.y);
            const head = cfg.x.format ? cfg.x.format(best.x) : num(best.x, 4);
            showTip(client.x, client.y, head, rows, cfg.note ? cfg.note(best.x) : null);
            if (cfg.onHover) cfg.onHover(best.x);
          }
        }
        function toLocal(evt) {
          const r = root.getBoundingClientRect();
          return (evt.clientX - r.left) * (width / r.width);
        }
        hit.addEventListener("pointermove", evt => draw(toLocal(evt), { x: evt.clientX, y: evt.clientY }, false));
        hit.addEventListener("pointerleave", () => { draw(null); if (cfg.onHover) cfg.onHover(null); });
        root.addEventListener("keydown", evt => {
          if (evt.key !== "ArrowLeft" && evt.key !== "ArrowRight" && evt.key !== "Escape") return;
          evt.preventDefault();
          if (evt.key === "Escape") { draw(null); if (cfg.onHover) cfg.onHover(null); return; }
          if (!stops.length) return;
          const jump = Math.max(1, Math.round(stops.length / 60));
          let idx = lastPx === null ? -1 : stops.findIndex(v => v >= lastPx - 0.05);
          if (idx < 0 && lastPx !== null) idx = stops.length - 1;
          idx = evt.key === "ArrowRight" ? Math.min(stops.length - 1, idx + jump) : Math.max(0, idx - jump);
          const cur = stops[idx];
          const r = root.getBoundingClientRect();
          draw(cur, { x: r.left + cur * (r.width / width), y: r.top + 24 }, false);
        });
        root.addEventListener("blur", () => { draw(null); if (cfg.onHover) cfg.onHover(null); });

        parent.append(root);
        if (!fig.revealed) {
          clipRect.setAttribute("width", 0);
          fig.animators.push(e => clipRect.setAttribute("width", (x1 - x0 + 8) * e));
        }
        return {
          sync(xv) {
            if (xv === null || xv === undefined) { hover.setAttribute("display", "none"); return; }
            draw(xpx(xv), null, true);
          }
        };
      }
      function syncCharts(charts) {
        charts.forEach((c, i) => {
          c.cfg.onHover = xv => charts.forEach((o, j) => { if (j !== i && o.chart) o.chart.sync(xv); });
        });
      }

      /* ---------- Figure 1: time per logit of every loss and of cross-entropy across sizes, and the
         SDCA solver. The helpers of this section also draw panel (a) of Figure 2. ---------- */
      function panelTitle(text, hint) {
        return el("p", { class: "panel-title" }, el("span", { text }),
                  hint ? el("span", { class: "panel-hint", text: hint }) : null);
      }
      const compName = fw => fw === "torch" ? "torch.compile" : "jax.jit";
      const libName = fw => fw === "torch" ? "libsdca" : "libsdca in JAX";
      /* Marks with a tooltip, on hover and on the arrow keys of their chart; one set per render. */
      function markSet() {
        const marks = [];
        return {
          add(root, node, px, py, head, rows) {
            const show = at => {
              marks.forEach(q => q.node.classList.toggle("is-active", q.node === node));
              showTip(at.x, at.y, head, rows(), null);
            };
            const leave = () => { node.classList.remove("is-active"); hideTip(); };
            node.addEventListener("pointermove", evt => show({ x: evt.clientX, y: evt.clientY }));
            node.addEventListener("pointerleave", leave);
            marks.push({ root, node, px, py, show, leave });
          },
          keyboard(root, width) {
            const order = marks.filter(q => q.root === root).sort((a, b) => a.px - b.px || a.py - b.py);
            let cursor = -1;
            root.addEventListener("keydown", evt => {
              if (evt.key !== "ArrowLeft" && evt.key !== "ArrowRight" && evt.key !== "Escape") return;
              evt.preventDefault();
              if (evt.key === "Escape" || !order.length) { cursor = -1; order.forEach(q => q.leave()); return; }
              cursor = evt.key === "ArrowRight" ? Math.min(order.length - 1, cursor + 1) : Math.max(0, cursor - 1);
              const r = root.getBoundingClientRect(), k = r.width / width;
              order[cursor].show({ x: r.left + order[cursor].px * k, y: r.top + order[cursor].py * k });
            });
            root.addEventListener("blur", () => { cursor = -1; order.forEach(q => q.leave()); });
          }
        };
      }
      function fwDtypeControls(controls, state, render, fwLabel) {
        controls.append(pills(fwLabel, [{ value: "torch", label: "PyTorch" }, { value: "jax", label: "JAX" }], state.fw,
                              v => { state.fw = v; render(); }));
        controls.append(pills("Precision", [{ value: "bf16", label: "bf16" }, { value: "fp32", label: "fp32" }], state.dtype,
                              v => { state.dtype = v; render(); }));
      }
      const speedSeries = state => [{ id: "lib", label: libName(state.fw), color: C.lib },
                                    { id: "comp", label: compName(state.fw), color: C.unfixed }];
      /* The key of panel (a): a dot is the framework's own loss, a ring our composition of tensor operations. */
      function compositionKey() {
        return el("div", { class: "bar-key tp-legend" },
          el("span", {}, el("span", { class: "tp-key", style: "background:" + C.unfixed }), "built-in loss"),
          el("span", {}, el("span", { class: "tp-key is-ring", style: "border-color:" + C.unfixed }), "composition of tensor operations"));
      }
      /* One row per loss: libsdca and its baseline on one logarithmic axis, joined by a line. Values outside
         the domain are drawn at its ends. */
      function dumbbell(parent, fig, marks, state, o) {
        const width = Math.max(240, Math.floor(parent.clientWidth || 420)), height = o.height;
        const m = { t: o.floor ? 24 : 10, r: 14, b: 42, l: 136 };
        const x0 = m.l, x1 = width - m.r, yTop = m.t, yBottom = height - m.b;
        const rowH = (yBottom - yTop) / Math.max(1, o.entries.length);
        const X0 = scale("log", o.domain, [x0, x1]), X = v => clamp(X0(v), x0, x1);
        const root = svg("svg", { class: "chart", viewBox: "0 0 " + width + " " + height, width, height, role: "img", tabindex: "0",
                                   "aria-label": o.ariaLabel });
        for (const [t, text] of o.ticks) {
          svg("line", { class: "grid-line", x1: X(t), x2: X(t), y1: yTop, y2: yBottom }, root);
          const g = svg("g", { class: "tick" }, root);
          svg("line", { class: "axis-line", x1: X(t), x2: X(t), y1: yBottom, y2: yBottom + 4 }, g);
          svg("text", { x: X(t), y: yBottom + 16, "text-anchor": "middle" }, g).textContent = text;
        }
        svg("line", { class: "axis-line", x1: x0, x2: x1, y1: yBottom, y2: yBottom }, root);
        svg("text", { class: "axis-label", x: x0 + (x1 - x0) / 2, y: height - 6, "text-anchor": "middle" }, root).textContent = o.axisLabel;
        if (o.floor) {
          svg("line", { class: "ref-line", x1: X(o.floor.x), x2: X(o.floor.x), y1: yTop - 6, y2: yBottom, "stroke-dasharray": "5 3" }, root);
          svg("text", { class: "ref-label", x: X(o.floor.x), y: yTop - 11, "text-anchor": "middle" }, root).textContent = o.floor.label;
        }
        const layer = svg("g", {}, root);
        o.entries.forEach((e, i) => {
          const y = yTop + rowH * (i + 0.5);
          svg("text", { x: x0 - 8, y, "text-anchor": "end", "dominant-baseline": "middle" }, svg("g", { class: "tick" }, root)).textContent = e.label;
          /* Dots closer than about two radii are drawn slightly apart vertically, libsdca above */
          const close = Math.abs(X(e.ref) - X(e.lib)) < 10, dy = close ? 4.5 : 0;
          if (!close) svg("line", { x1: X(e.lib), x2: X(e.ref), y1: y, y2: y, stroke: "var(--faint)", "stroke-width": 2 }, layer);
          const tip = () => o.tip(e);
          if (!state.hidden.has("comp")) {
            const b = svg("circle", { class: "tp-mark series-dot", cx: X(e.ref), cy: y + dy, r: 4.2, fill: C.unfixed, "data-series": "comp",
                                      style: e.composition ? "fill: var(--bg); stroke: " + C.unfixed + "; stroke-width: 1.8px" : null }, layer);
            marks.add(root, b, X(e.ref), y + dy, e.label + " · " + o.refName(e), tip);
          }
          if (!state.hidden.has("lib")) {
            const l = svg("circle", { class: "tp-mark series-dot", cx: X(e.lib), cy: y - dy, r: 4.6, fill: C.lib, "data-series": "lib" }, layer);
            marks.add(root, l, X(e.lib), y - dy, e.label + " · " + libName(state.fw), tip);
          }
        });
        marks.keyboard(root, width);
        parent.append(root);
        if (!fig.revealed) {
          layer.setAttribute("opacity", 0);
          fig.animators.push(e => layer.setAttribute("opacity", e));
        }
      }
      /* (b) Every loss on 4096 x 32,000 logits against its compiled baseline, sorted by libsdca. */
      function lossSpeedChart(parent, fig, marks, state, height) {
        const cn = compName(state.fw);
        const entries = (((DATA.per_logit.per_loss || {})[state.fw] || {})[state.dtype] || [])
          .filter(e => e.loss !== "topk_hinge_alpha")  /* the beta variant stands for both */
          .map(e => Object.assign({ lib: e.lib_ps, ref: e.ref_ps }, e)).sort((a, b) => a.lib - b.lib);
        dumbbell(parent, fig, marks, state, {
          entries, height, domain: [3, 250], ticks: [5, 10, 20, 50, 100, 200].map(t => [t, String(t)]),
          axisLabel: "Time per logit (ps)",
          ariaLabel: "Time per logit of every loss on 4096 by 32,000 logits in " + state.dtype + ", libsdca and " + cn,
          refName: e => cn + (e.composition ? " of our composition" : ""),
          tip: e => [
            { label: libName(state.fw), color: C.lib, value: psText(e.lib_ps) + " ps per logit" },
            { label: cn + (e.composition ? " of our composition" : ""), color: C.unfixed, value: psText(e.ref_ps) + " ps per logit" },
            { label: "Speedup", value: sig3(e.sp) + "× (" + (e.verdict === "neither" ? "no significant difference" : "libsdca is " + e.verdict) + ")" }]
        });
      }
      /* (a) Cross-entropy: one point per training configuration and implementation. A line joins, for
         each implementation, the medians of the inputs of 1000 classes or more whose sizes round to the
         same power of two (narrow rows take longer per logit and would bend the line). */
      function ceSizeChart(parent, fig, marks, state, height) {
        const D = DATA.per_logit, cn = compName(state.fw);
        const all = Object.values(D.points).flatMap(byLoss => Object.values(byLoss).flatMap(byDt => Object.values(byDt).flat()));
        const yAll = all.flatMap(p => [p.lib_ms, p.ref_ms].filter(Boolean).map(ms => perLogit(ms, p.logits)));
        const xDom = [7e5, 1.6e9], yDom = [Math.min(...yAll) / 1.5, Math.max(...yAll) * 1.3];  /* the same axes in every view */
        const sizeText = v => v >= 1e9 ? num(v / 1e9, 3) + "G" : num(v / 1e6, 3) + "M";
        const median = v => { const a = v.slice().sort((p, q) => p - q), h = a.length >> 1; return a.length % 2 ? a[h] : Math.sqrt(a[h - 1] * a[h]); };
        const series = [{ id: "lib", key: "lib_ms", label: libName(state.fw), color: C.lib, r: 4 },
                        { id: "comp", key: "ref_ms", label: cn, color: C.unfixed, r: 3.4 }];
        const pts = ((D.points[state.fw] || {}).cross_entropy || {})[state.dtype] || [];
        const width = Math.max(240, Math.floor(parent.clientWidth || 420));
        const m = { t: 10, r: 12, b: 42, l: 50 };
        const x0 = m.l, x1 = width - m.r, yTop = m.t, yBottom = height - m.b;
        const X = scale("log", xDom, [x0, x1]), Y = scale("log", yDom, [yBottom, yTop]);
        const root = svg("svg", { class: "chart", viewBox: "0 0 " + width + " " + height, width, height, role: "img", tabindex: "0",
                                   "aria-label": "Time per logit of cross-entropy in " + state.dtype + " against the number of logits, for libsdca and " + cn });
        for (const t of [2, 5, 10, 20, 50, 100, 200, 500].filter(t => t >= yDom[0] && t <= yDom[1])) {
          svg("line", { class: "grid-line", x1: x0, x2: x1, y1: Y(t), y2: Y(t) }, root);
          svg("text", { x: x0 - 8, y: Y(t), "text-anchor": "end", "dominant-baseline": "middle" }, svg("g", { class: "tick" }, root)).textContent = String(t);
        }
        for (const t of [1e6, 1e7, 1e8, 1e9]) {
          const g = svg("g", { class: "tick" }, root);
          svg("line", { class: "axis-line", x1: X(t), x2: X(t), y1: yBottom, y2: yBottom + 4 }, g);
          svg("text", { x: X(t), y: yBottom + 16, "text-anchor": "middle" }, g).textContent = sizeText(t);
        }
        svg("line", { class: "axis-line", x1: x0, x2: x1, y1: yBottom, y2: yBottom }, root);
        svg("text", { class: "axis-label", x: x0 + (x1 - x0) / 2, y: height - 6, "text-anchor": "middle" }, root)
          .textContent = "Logits per call (rows × classes)";
        const midY = yTop + (yBottom - yTop) / 2;
        svg("text", { class: "axis-label", x: 11, y: midY, "text-anchor": "middle", "dominant-baseline": "middle",
                      transform: "rotate(-90 11 " + midY + ")" }, root).textContent = "Time per logit (ps)";
        const layer = svg("g", {}, root);
        const limit = D.limit[state.dtype];
        if (limit) {
          svg("line", { class: "ref-line", x1: x0, x2: x1, y1: Y(limit), y2: Y(limit), "stroke-dasharray": "5 3" }, layer);
          svg("text", { class: "ref-label", x: x1 - 4, y: Y(limit) + 15, "text-anchor": "end" }, layer)
            .textContent = "memory-bandwidth limit, " + psText(limit) + " ps";
        }
        for (const s of series.filter(s => !state.hidden.has(s.id))) {
          const have = pts.filter(p => p[s.key]);
          const bins = new Map();
          for (const p of have.filter(p => p.classes >= 1000)) {
            const k = Math.round(Math.log2(p.logits));
            if (!bins.has(k)) bins.set(k, []);
            bins.get(k).push(p);
          }
          const path = Array.from(bins.keys()).sort((a, b) => a - b).map(k => {
            const b = bins.get(k);
            return X(median(b.map(p => p.logits))).toFixed(1) + " " + Y(median(b.map(p => perLogit(p[s.key], p.logits)))).toFixed(1);
          });
          svg("path", { class: "series-path", d: "M" + path.join("L"), stroke: s.color, "stroke-width": s.id === "lib" ? 2 : 1.5,
                        "stroke-opacity": 0.55, "data-series": s.id }, layer);
          for (const p of have) {
            const v = perLogit(p[s.key], p.logits), px = X(p.logits), py = Y(v);
            const node = svg("circle", { class: "tp-mark series-dot", cx: px, cy: py, r: s.r, fill: s.color, "fill-opacity": s.id === "lib" ? 0.95 : 0.8,
                                         "data-series": s.id }, layer);
            marks.add(root, node, px, py, s.label + " · Cross-entropy", () => [
              { label: "Input", value: p.shape + ", " + state.dtype + " (" + sizeText(p.logits) + " logits)" },
              { label: "Time per call", color: s.color, value: num(p[s.key], 3) + " ms" },
              { label: "Time per logit", value: psText(v) + " ps" },
              { label: "Speedup over " + cn, value: sig3(p.sp) + "× (" +
                (p.verdict === "neither" ? "no significant difference" : "libsdca is " + p.verdict) + ")" }]);
          }
        }
        marks.keyboard(root, width);
        parent.append(root);
        if (!fig.revealed) {
          layer.setAttribute("opacity", 0);
          fig.animators.push(e => layer.setAttribute("opacity", e));
        }
      }
      /* The SDCA solver against LIBLINEAR (Section 3.2). */
      function solverBars(parent, fig) {
        bars(parent, fig, DATA.teaser.solver_speedups.slice().sort((a, b) => b.strong - a.strong), {
          domain: [0.5, 100],
          ticks: [[1, "1×"], [3, "3×"], [10, "10×"], [30, "30×"], [100, "100×"]],
          axisLabel: "Speedup over LIBLINEAR in time to 10⁻³ suboptimality",
          key: [["cpu", "one fit"], ["ring", "Gram matrix reused"]]
        });
      }
      const TITLE_A = "Cross-entropy across input sizes", TITLE_B = "Every loss on 4096 × 32,000 logits";
      setupFigure("teaser", fig => {
        fig.mount.classList.add("teaser-chart");
        const f = frame(fig, { title: "Fast at every input size and on every loss",
                               subtitle: "Time of one training call on a GPU divided by the number of logits · log scales" });
        const state = { fw: "torch", dtype: "bf16", hidden: new Set() };
        fwDtypeControls(f.controls, state, () => render(), "Framework");
        function render() {
          fig.animators = [];
          f.body.textContent = "";
          const marks = markSet();
          f.body.append(legend(speedSeries(state), state, () => f.body, render));
          const [pa, pb] = panelGrid(f.body, 2);
          pa.append(panelTitle("(a) " + TITLE_A, "↓ lower is faster"));
          pb.append(panelTitle("(b) " + TITLE_B, "← left is faster"), compositionKey());
          const ca = el("div", { class: "chart-canvas" }), cb = el("div", { class: "chart-canvas" });
          pa.append(ca);
          pb.append(cb);
          const wide = window.innerWidth >= 760;
          const height = Math.round(clamp((ca.clientWidth || 420) * 0.85, 320, 400));
          /* side by side, both plots end on one line: (a) is as tall as (b) with its key */
          const offset = wide ? Math.round(cb.getBoundingClientRect().top - ca.getBoundingClientRect().top) : 0;
          ceSizeChart(ca, fig, marks, state, height + offset);
          lossSpeedChart(cb, fig, marks, state, height);
        }
        fig.rerender = render;
        render();
      });
      /* The same panels as two figures, each as wide as its mount (the project page). */
      function teaserFrame(fig) {
        fig.mount.classList.add("teaser-chart");
        const controls = el("div", { class: "chart-controls" }), body = el("div", { class: "chart-body" });
        fig.mount.append(controls, body);
        return { controls, body };
      }
      function teaserSpeedFigure(key, title, hint, draw, withKey) {
        setupFigure(key, fig => {
          const f = teaserFrame(fig), state = { fw: "torch", dtype: "bf16", hidden: new Set() };
          fwDtypeControls(f.controls, state, () => render(), "Framework");
          function render() {
            fig.animators = [];
            f.body.textContent = "";
            f.body.append(legend(speedSeries(state), state, () => f.body, render), panelTitle(title, hint));
            if (withKey) f.body.append(compositionKey());
            const c = el("div", { class: "chart-canvas" });
            f.body.append(c);
            /* data-height on the mount fixes the height (the homepage thumbnail) */
            draw(c, fig, markSet(), state, +fig.mount.dataset.height || Math.round(clamp((c.clientWidth || 420) * 0.7, 320, 400)));
          }
          fig.rerender = render;
          render();
        });
      }
      teaserSpeedFigure("teaser-a", TITLE_A, "↓ lower is faster", ceSizeChart, false);
      teaserSpeedFigure("teaser-b", TITLE_B, "← left is faster", lossSpeedChart, true);
      setupFigure("solver", fig => {
        const f = frame(fig, { title: "SDCA solver against LIBLINEAR",
                               subtitle: "Multiclass SVM, 10 classes · one CPU thread · log scale" });
        function render() {
          fig.animators = [];
          f.body.textContent = "";
          solverBars(f.body, fig);
        }
        fig.rerender = render;
        render();
      });

      function bars(parent, fig, items, opts) {
        const [lo, hi] = opts.domain;
        const pos = v => clamp(Math.log(v / lo) / Math.log(hi / lo) * 100, 0, 100);
        const factor = v => (v < 1 ? num(v, 2) : sig3(v)) + "×";
        const keyEl = el("div", { class: "bar-key" });
        for (const [kind, text] of opts.key) {
          const sw = kind === "ring"
            ? el("span", { class: "bar-key-ring" })
            : el("span", { class: "bar-key-fill", style: kind === "cpu" ? "background:#3584e4" : null });
          keyEl.append(el("span", {}, sw, text));
        }
        parent.append(keyEl);
        const list = el("div", { class: "bars" + (fig.revealed ? "" : " pre-reveal") });
        const onePct = pos(1);
        items.forEach((d, i) => {
          const row = el("div", { class: "bar-row" });
          const label = el("div", { class: "bar-label", tabindex: "0" }, el("span", { class: "bar-name", text: d.label }),
                           d.detail ? el("span", { class: "bar-detail", text: d.detail }) : null);
          const track = el("div", { class: "bar-track" });
          const one = el("div", { class: "bar-one" });
          one.style.left = onePct + "%";
          const fillPct = pos(d.strong);
          const fill = el("div", { class: "bar-fill is-cpu" });
          fill.style.width = fillPct + "%";
          fill.style.transitionDelay = (i * 55) + "ms";
          if (d.eager) {
            const eagerPct = pos(d.eager);
            if (eagerPct > fillPct) {
              const span = el("div", { class: "bar-span" });
              span.style.left = fillPct + "%";
              span.style.width = (eagerPct - fillPct) + "%";
              span.style.transitionDelay = (i * 55 + 120) + "ms";
              track.append(span);
            }
            const ring = el("span", { class: "bar-ring" });
            ring.style.left = eagerPct + "%";
            track.append(ring);
          }
          track.append(fill, one);
          const val = el("div", { class: "bar-value", text: factor(d.strong) });
          row.append(label, track, val);
          const show = evt => {
            const rows = [
              { label: "libsdca", color: C.libCpu, value: num(d.lib_s, 3) + " s" + (d.reused_s ? " (" + num(d.reused_s, 3) + " s with the Gram matrix reused)" : "") },
              { label: d.base_label, color: C.base, value: num(d.base_s, 3) + " s" }
            ];
            const note = "Speedup over " + d.base_label + ": " + factor(d.strong)
              + (d.eager ? " with the Gram matrix built for this fit, " + factor(d.eager) + " with it reused." : ".");
            const r = evt.currentTarget.getBoundingClientRect();
            showTip(evt.clientX || r.right, evt.clientY || r.top, d.label + " · " + d.detail, rows, note);
          };
          [label, track, val].forEach(n => {
            n.addEventListener("pointermove", show);
            n.addEventListener("pointerleave", hideTip);
          });
          label.addEventListener("focus", show);
          label.addEventListener("blur", hideTip);
          list.append(row);
        });
        parent.append(list);
        const axis = el("div", { class: "bar-axis" }, el("span"), el("div", { class: "bar-axis-track" }), el("span"));
        const at = axis.children[1];
        for (const entry of opts.ticks) {
          const [t, lbl] = Array.isArray(entry) ? entry : [entry, entry + "×"];
          const s = el("span", { class: t === 1 ? "is-one" : null, text: lbl });
          s.style.left = pos(t) + "%";
          at.append(s);
        }
        parent.append(axis);
        if (opts.axisLabel) {
          parent.append(el("div", { class: "bar-axis-note", text: opts.axisLabel }));
        }
        if (!fig.revealed) fig.animators.push(() => list.classList.remove("pre-reveal"));
      }
    })();
