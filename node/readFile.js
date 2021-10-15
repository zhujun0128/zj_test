var fs = require("fs");
var filename = "data.txt";
var filename1 = "data1.txt";
console.log("异步读取开始");
fs.readFile(filename,function (err,data) {
    if(err) return console.error(err);
    console.log("异步读取完成：" + data.toString());
});
console.log("异步读取调用结束。");

console.log("同步读取开始");
var data = fs.readFileSync(filename);
console.log("同步读取完成：" + data.toString());
console.log("同步读取调用结束。");