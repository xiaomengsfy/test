// ==UserScript==
// @name         自用网页重定向
// @version      0.1.1
// @updateURL    https://raw.githubusercontent.com/xiaomengsfy/test/refs/heads/main/%E9%87%8D%E5%AE%9A%E5%90%91.js
// @downloadURL  https://raw.githubusercontent.com/xiaomengsfy/test/refs/heads/main/%E9%87%8D%E5%AE%9A%E5%90%91.js
// @description  重定向部分网页方便日常使用
// @match        *://*.bilibili.com/list*
// @match        *://*.google.cn/*
// @match        *://acg.tv/*
// @match        *://baike.baidu.hk/*
// @match        *://*.google.com/search?q=*
// @match        *://jm.tt/*
// @match        *://zh.moegirl.org.cn/*
// @match        *://zh.wikipedia.org/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href;
    window.location.href = url.replace('jm.tt', '18comic.vip').replace(/\/list\/watchlater\?bvid=([^&]+).*/, '/video/$1');
})();
