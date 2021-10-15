var http = require("http");
var stuInfo = [
    {name:"zs",age:18},
    {name:"lisi",age:20}
    ];
var server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    req.on("data",function (chunk) {

    });
    req.on("end",function () {
        res.end(JSON.stringify(stuInfo));
    });
}).listen(3000);