var fs = require("fs");
console.log("异步删除文件");
fs.unlink("data1.txt",function (err) {
    if(err) return console.error(err);
    console.log("异步删除成功");
});
console.log("异步删除文件调用结束");