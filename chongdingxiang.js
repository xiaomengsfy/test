// ==UserScript==
// @name         自用网页重定向
// @version      0.1.2
// @description  重定向部分网页方便日常使用
// @match        *://*.bilibili.com/list*
// @match        
// @match        
// @match        
// @match        *://*.google.com/search?q=mnbk*
// @match        *://jm.tt/*
// @match        
// @match        
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href;
    window.location.href = url.replace('jm.tt', '18comic.vip').replace(/\/list\/watchlater\?bvid=([^&]+).*/, '/video/$1').replace(/.*\.google.*/search?q=mnbk.*/, 'zh.moegirl.org.cn/index.php?search=').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '').replace('', '')v;
})();