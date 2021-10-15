const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
// let data = [{name:"lisi",pwd:"123456"},{name:"zhangsan",pwd:"123456"}];
let data = [{name:"张三",age:18,sex:"male"},{name:"李四",age:20,sex:"male"},{name:"王五",age:19,sex:"female"},
    {name:"赵六",age:21,sex:"male"},{name:"孙七",age:22,sex:"female"},{name:"周八",age:20,sex:"female"},
    {name:"吴九",age:18,sex:"male"}];
const server = http.createServer((req,res)=>{
    // var params = req.url.split("?")[1].split("&");
    // var obj = {};
    // var flag = false;
    // params.map(v => obj[v.split("=")[0]] = v.split("=")[1]);
    // data.map(v => flag = v.name == obj.name && v.pwd == obj.pwd ? true : flag);
    // // data.forEach(function (item) {
    // //     if(item.name == obj.name && item.pwd == obj.pwd)
    // //     {
    // //         flag = true;
    // //     }
    // // });
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.setHeader("Access-Control-Allow-Origin","*");
    // res.end("" + flag);
    res.end(JSON.stringify(data));
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});