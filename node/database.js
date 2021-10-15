var MongoClient = require("mongodb").MongoClient;
// var mongoUrl = "mongodb://127.0.0.1:27017/admin";//无密码的
var mongoUrl = "mongodb://admin:123456@127.0.0.1:27017/admin";
MongoClient.connect(mongoUrl,{useNewUrlParser:true},function (err,db) {
    if(err)throw err;
    console.log("数据库已创建");
    var dbase = db.db("student");

    /*创建集合*/
    /*dbase.createCollection("site",function (err,res) {
        if(err)throw err;
        console.log("创建集合！");
        db.close();
    });*/

    /*插入1条数据*/
    /*var myobj = {name:"php",url:"www.php.com"};
    dbase.collection("site").insertOne(myobj,function (err,res) {
        if(err)throw err;
        console.log("文档插入成功！");
        db.close();
    });*/

    /*插入多条数据*/
    /*var myobj = [
        {name:"js",url:"www.js.com",type:2},{name:"php",url:"www.php.com",type:1},
        {name:"c",url:"www.c.com",type:3}
    ];
    dbase.collection("site").insertMany(myobj,function (err,res) {
        if(err)throw err;
        console.log("文档插入成功，数量为" + res.insertedCount + "！");
        db.close();
    });*/

    /*查询数据*/
    /*dbase.collection("site").find({}).toArray(function (err,result) {
        if(err)throw err;
        console.log(result);
        db.close();
    });*/

    /*查询指定条件的数据*/
    /*var whereStr = {money:{$exists:1}};
    dbase.collection("site").find(whereStr).toArray(function (err,result) {
        if(err)throw err;
        console.log(result);
        db.close();
    });*/

    /*更新1条数据*/
    /*var whereStr = {name:"js"};
    var updateStr = {$set:{money:30}};
    dbase.collection("site").updateOne(whereStr,updateStr,function (err,res) {
        if(err)throw err;
        console.log("文档更新成功！");
        db.close();
    });*/

    /*更新多条数据*/
    /*var whereStr = {money:{$exists:1}};
    var updateStr = {$inc:{money:10}};
    dbase.collection("site").updateMany(whereStr,updateStr,function (err,res) {
        if(err)throw err;
        console.log("文档更新成功！");
        db.close();
    });*/

    /*删除1条数据*/
    /*var whereStr = {name:"php"};
    dbase.collection("site").deleteOne(whereStr,function (err,res) {
        if(err)throw err;
        console.log("文档删除成功！");
        db.close();
    });*/

    /*删除多条数据*/
    /*var whereStr = {money:{$exists:1}};
    dbase.collection("site").deleteMany(whereStr,function (err,res) {
        if(err)throw err;
        console.log("文档删除成功！");
        db.close();
    });*/

    /*排序，分页，跳过*/
    /*var whereStr = {type:{$exists:1}};
    var mysort = {type:1};
    dbase.collection("site").find(whereStr).sort(mysort).limit(2).skip(1).toArray(function (err,result) {
        if(err)throw err;
        console.log(result);
        db.close();
    });*/

    /*连接操作*/
    /*
    * orders = [{_id:154,money:3000},{_id:155,money:300}];
    * products = [{_id:154,name:"笔记本电脑"},{_id:155,name:"耳机"}];
    *
    * [{_id:154,name:"笔记本电脑",money:3000},{_id:155,name:"耳机",money:300}]
    * */
    /*dbase.collection("orders").aggregate([{
        $lookup:{
            from:"products",
            localField:"_id",
            foreignField:"_id",
            as:"orderArray"
        }
    },{
        $unwind:{
            path:"$orderArray"
        }
    },{
        $group:{
            _id:"$_id",
            name:{$first:"$orderArray.name"},
            money:{$first:"$money"}
        }
    }]).toArray(function (err,result) {
        if(err)throw err;
        console.log(result);
        db.close();
    });*/

    /*删除集合*/
    dbase.collection("site").drop(function (err,delOK) {
        if(err)throw err;
        if(delOK) console.log("集合已删除");
        db.close();
    });
});