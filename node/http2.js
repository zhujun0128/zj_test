const  http = require('http');
const url = require("url");
const querystring = require("querystring");
let  data = [
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
const  server = http.createServer((req,res) => {
    /*let m = req.url.slice(2);
    let arr = m.split("&");
    let arrItem = [];
    let obj = {};
    arr.forEach((item) =>{
        arrItem.push(item.split("="));
    });
    arrItem.forEach((item) =>{
        obj[item[0]] = item[1];
    });*/
    let querystr = url.parse(req.url).query;
    let str = "foo=bar||abc=xyz||abc=123";
    // let obj = querystring.parse(querystr,"&","=");
    let obj = querystring.parse(str,"||","=");
    console.log(obj);
    res.statusCode = 200;
    // res.setHeader('Content-Type','application/json');
    res.setHeader('Content-Type','text/css');
    res.setHeader('Access-Control-Allow-Origin','*');
    /*let tempData = data.slice((obj.currentPage - 1) * obj.num,obj.currentPage * obj.num);
    let resData = {
        total:data.length,
        tempData
    };*/
    // res.end(JSON.stringify(resData));
    res.end("body{background:red}");
}).listen(3002);