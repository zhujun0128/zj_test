var fs = require("fs");
/*var path = "test";
console.log("异步创建目录" + path);
fs.mkdir(path,function (err) {
    if(err) return console.error(err);
    console.log("异步创建成功");
});
console.log("异步创建调用结束");*/
function makeDir(path) {
    var str = path.split("/");
    var text = ".";
    for(var i = 0;i < str.length;i++)
    {
        text += "/" + str[i];
        console.log(text);
        fs.mkdirSync(text,function (err) {
            if(err) return console.error(err);
        });
    }

}
makeDir("a/b/c/d");