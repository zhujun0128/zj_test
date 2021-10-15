var fs = require("fs");
var path = "www";
console.log("异步删除目录：" + path);
fs.rmdir(path,function (err) {
    if(err){
        return console.error(err);
    }else {
        console.log("异步删除目录成功");
    }
});
console.log("异步删除目录调用结束");