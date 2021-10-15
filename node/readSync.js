const fs = require("fs");
/*
let data = fs.readFileSync("./data.txt");
console.log(data.toString());
console.log("文件读取结束");*/
let data = fs.readFile("data.txt",function (err,data) {
    if(err)throw err;
    console.log(data.toString());
});
console.log("文件读取结束1");
console.log("文件读取结束2");
console.log("文件读取结束3");
console.log("文件读取结束4");
console.log("文件读取结束5");


