var fs = require("fs");
var filename = "data.txt";
console.log("异步读取文件信息");
fs.stat(filename,function (err,stats) {
    if(err){
        console.log("异步获取文件信息失败：" + err);
    }else {
        console.log(stats);
        //检测文件类型
        console.log("是否是文件(isFile)" + stats.isFile());
        console.log("是否是文件夹(isDirectory)" + stats.isDirectory());
    }
});
console.log("异步获取文件信息调用结束");