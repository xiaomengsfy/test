/***********************************

> 应用名称：BiliBili首页信息流处理
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：关闭全Story模式[短视频模式太傻逼了]
> 更新时间：2023-06-04
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 重写地址：https://gist.githubusercontent.com/ddgksf2013/a04e64065d08f5871ccf1e79c06a8c04/raw/bilibili.feed.enhance.js
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
          
          
[rewrite_local]

^https?:\/\/app\.bilibili\.com\/x\/v\d\/feed\/index\? url script-request-header https://raw.githubusercontent.com/xiaomengsfy/test/main/xinxiliu.js

[mitm]
 
hostname = app.bilibili.com

***********************************/
























//video_mode=2 首页信息流全是短视频，即每个点进去都是Story模式
var modifiedPath = $request.path.replace(/video_mode=\d/g,'video_mode=2');
$done({path: modifiedPath});
