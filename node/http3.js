var  http = require('http');
var url = require("url");
var querystring = require("querystring");
var  data = [
    {
        name:'张三',
        age:18,
        sex:'male'

    },
    {
        name:'李四',
        age:22,
        sex:'male'

    },
    {
        name:'王五',
        age:20,
        sex:'male'

    },
    {
        name:'赵六',
        age:19,
        sex:'male'

    },
    {
        name:'刘七',
        age:23,
        sex:'famale'

    },
    {
        name:'周八',
        age:19,
        sex:'male'

    },
    {
        name:'郑九',
        age:19,
        sex:'male'

    }
];
http.createServer((req,res) =>{
    var post = "";
    res.setHeader('Content-Type','application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    req.on("data",function (chunk) {
        post += chunk;
    });
    req.on("end",function () {
        if(req.method == "GET"){
            post = url.parse(req.url).query;
        }
        post = querystring.parse(post);
        var tempData = data.slice((post.currentPage - 1) * post.num,post.currentPage * post.num);
        var resData = {
            total:data.length,
            tempData:tempData
        };
        res.end(JSON.stringify(resData));
    });
}).listen(3003);