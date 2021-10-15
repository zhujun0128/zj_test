var fs = require("fs");
var filename = "data1.txt";
/*
fs.writeFile(filename,"写入文件测试",function (err) {
    if(err) {
        console.log("异步写入错误:" + err);
    }else {
        console.log("异步写入成功");
    }
});
console.log("异步写入调用结束");*/
var err = fs.writeFileSync(filename,"写入文件测试");
if(err){
    console.log("同步写入出错" + err);
}
console.log("同步写入调用结束");