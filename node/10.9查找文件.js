var fs = require("fs");
var t = [];
function findFile(startDir,endFileName) {
    fs.readdir(startDir,function (err,files) {
        if(err) return console.error(err);
        files.forEach(function (file) {
            fs.stat(startDir + "/" + file,function (err,stats) {
                if(err){
                    console.log("异步获取文件信息失败：" + err);
                }else {
                    if(stats.isDirectory()){
                        findFile(startDir + "/" + file,endFileName);
                    }
                    if(stats.isFile() && file == endFileName){
                        t.push(startDir + "/" + file);
                        console.log(t);
                    }
                }
            });
        });
    });
}
findFile("a","a.html");