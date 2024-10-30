// ==UserScript==
// @name         自用网页重定向
// @version      0.11
// @updateURL    https://raw.githubusercontent.com/xiaomengsfy/test/refs/heads/main/%E9%87%8D%E5%AE%9A%E5%90%91.js
// @downloadURL  https://raw.githubusercontent.com/xiaomengsfy/test/refs/heads/main/%E9%87%8D%E5%AE%9A%E5%90%91.js
// @description  重定向部分网页方便日常使用
// @include      *://*.bilibili.com/*
// @include      *://*.google.cn/*
// @include      *://acg.tv/*
// @include      *://baike.baidu.hk/*
// @include      *://*.google.com/search?q=*
// @include      *://jm.tt
// @include      *://zh.moegirl.org.cn/*
// @include      *://zh.wikipedia.org/*
// @run-at       document-start
// ==/UserScript==
 
document.location.href = document.location.href
  //稍后再看重定向
  .replace('list/watchlater?bvid=', 'video/')
  //去除链接跟踪内容
  .replace(/(*\.bilibili\.com\/video\/[^&]+).*/, '$1')
  //谷歌cn重定向
  .replace('google.cn', 'google.com')
  //b站sm号跳转niconico
  .replace('//acg.tv', '//www.nicovideo.jp/watch')
  //百度百科.hk重定向到.com
  .replace('baike.baidu.hk', 'baike.baidu.com')
  //维基繁中重定向简中
  .replace('zh.wikipedia.org/zh-hant', 'zh.wikipedia.org/wiki')
  .replace('zh.wikipedia.org/zh-hk', 'zh.wikipedia.org/wiki')
  // 萌娘百科快速搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=mn\+/, 'https://zh.moegirl.org.cn/index.php?search=')
  // 萌娘百科繁中重定向简中
  .replace(/https?:\/\/zh\.moegirl\.org\.cn\/zh\-hk/, 'https://zh.moegirl.org.cn')
  .replace(/https?:\/\/zh\.moegirl\.org\.cn\/zh\-tw/, 'https://zh.moegirl.org.cn')
  // 在Apple Music搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=im\+/, 'https://music.apple.com/cn/search?term=')
  // THB wiki快速搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=thb\+/, 'https://thwiki.cc/index.php?search=')
  // 使用DuckDuckGo搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=ddg&.+/, 'https://duckduckgo.com/')
  // pixiv快速搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=pixiv&.+/, 'https://www.pixiv.net')
  .replace(/https?:\/\/www\.google\.com\/search\?q=pix\+([^&]+).+/, 'https://www.pixiv.net/tags/$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=pu\+([^&]+).+/, 'https://www.pixiv.net/search_user.php?s_mode=s_usr&nick=$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=pi\+([^&]+).+/, 'https://www.pixiv.net/artworks/$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=pun\+([^&]+).+/, 'https://www.pixiv.net/users/$1')
  // Fanbox快速搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=fb\+/, 'https://www.fanbox.cc/search?type=creator&q=')
  // JMTT快速搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=jm\+/, 'https://18comic.vip/search/photos?search_query=')
  // 禁漫天堂快速访问
  .replace(/http?:\/\/jm\.tt/, 'https://18comic.vip')
  // 有道词典
  .replace(/https?:\/\/www\.google\.com\/search\?q=yd\+([^&]+).+/, 'http://dict.youdao.com/search?q=$1')
  // Google 译至中
  .replace(/https?:\/\/www\.google\.com\/search\?q=trc\+([^&]+).+/, 'https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1')
  // Google 译至英
  .replace(/https?:\/\/www\.google\.com\/search\?q=tre\+([^&]+).+/, 'https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1')
  // Google 译至日
  .replace(/https?:\/\/www\.google\.com\/search\?q=trj\+([^&]+).+/, 'https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1')
  // 知乎
  .replace(/https?:\/\/www\.google\.com\/search\?q=zh\+([^&]+).+/, 'http://www.zhihu.com/search?q=$1')
  // 微博
  .replace(/https?:\/\/www\.google\.com\/search\?q=wb\+([^&]+).+/, 'https://s.weibo.com/weibo/$1')
  // 微信
  .replace(/https?:\/\/www\.google\.com\/search\?q=wx\+([^&]+).+/, 'https://weixin.sogou.com/weixinwap?query=$1')
  // Twitter
  .replace(/https?:\/\/www\.google\.com\/search\?q=tw\+([^&]+).+/, 'https://twitter.com/search?q=$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=twitter&.+/, 'https://twitter.com')
  // GitHub
  .replace(/https?:\/\/www\.google\.com\/search\?q=gh\+([^&]+).+/, 'https://github.com/search?q=$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=github&.+/, 'https://github.com')
  // 什么值得买
  .replace(/https?:\/\/www\.google\.com\/search\?q=zdm\+([^&]+).+/, 'https://search.smzdm.com/?v=b&s=$1')
  // 京东
  .replace(/https?:\/\/www\.google\.com\/search\?q=jd\+([^&]+).+/, 'https://so.m.jd.com/ware/search.action?keyword=$1')
  // 淘宝
  .replace(/https?:\/\/www\.google\.com\/search\?q=tb\+([^&]+).+/, 'https://s.taobao.com/h5?q=$1')
  // YouTube
  .replace(/https?:\/\/www\.google\.com\/search\?q=yt\+([^&]+).+/, 'https://www.youtube.com/results?search_query=$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=ytb&.+/, 'https://www.youtube.com')
  // 哔哩哔哩
  .replace(/https?:\/\/www\.google\.com\/search\?q=bli\+([^&]+).+/, 'https://www.bilibili.com/search?keyword=$1')
  .replace(/https?:\/\/www\.google\.com\/search\?q=bili&.+/, 'https://www.bilibili.com')
  // Acfun
  .replace(/https?:\/\/www\.google\.com\/search\?q=ac\+([^&]+).+/, 'https://www.acfun.cn/search?keyword=$1')
  // 茶杯狐
  .replace(/https?:\/\/www\.google\.com\/search\?q=ys\+([^&]+).+/, 'https://cupfox.app/search?key=$1')
  // 百度搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=bd\+([^&]+).+/, 'https://www.baidu.com/s?wd=$1')
  // 维基搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=wk\+([^&]+).+/, 'https://zh.wikipedia.org/wiki/$1')
  // 无追搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=wz\+([^&]+).+/, 'https://www.wuzhuiso.com/s?q=$1')
  // 油猴搜索
  .replace(/https?:\/\/www\.google\.com\/search\?q=yh\+([^&]+).+/, 'https://greasyfork.org/zh-CN/scripts?q=$1')
  // Google 图片
  .replace(/https?:\/\/www\.google\.com\/search\?q=gi\+([^&]+).+/, 'https://www.google.com/search?&tbm=isch&q=$1')
  // 必应
  .replace(/https?:\/\/www\.google\.com\/search\?q=by\+([^&]+).+/, 'https://www.bing.com/search?q=$1')
