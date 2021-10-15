var fs = require("fs");
var path = "www";
/*console.log("读取目录内容：" + path);
fs.readdir(path,function (err,files) {
    if(err) return console.error(err);
    console.log("读取目录内容成功：");
    files.forEach(function (file) {
        console.log(file);
    });
});*/
console.log("读取目录内容调用结束");
/*删除指定目录下面的文件*/
function delDirFile(path) {
    let filesLength;
    /*检测文件是否为0，如果为0就删除文件夹*/
    function count() {
        if(!filesLength){
            fs.rmdir(path,function (err) {
                if(err){
                    return console.error(err);
                }else {
                    console.log("文件删除成功");
                }
            })
        }
    }
    fs.readdir(path,function (err,files) {
        if(err) return console.error(err);
        filesLength = files.length;
        count();
        if(files.length >= 1){
            files.forEach(function (file) {
                fs.unlink(path + "/" +file,function (err) {
                    filesLength--;
                    count();
                    if(err) return console.error(err);
                    console.log("异步删除成功");
                });
            });
        }
    });
}
delDirFile("test");