
//video_mode=2 首页信息流全是短视频，即每个点进去都是Story模式
var modifiedPath = $request.path.replace(/video_mode=\d/g,'video_mode=2');
$done({path: modifiedPath});
