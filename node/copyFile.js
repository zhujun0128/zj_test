var fs = require("fs");
function copy(file1,file2) {
    /*var data = fs.readFileSync(file1);
    fs.writeFileSync(file2,data);*/
    fs.readFile(file1,function (err,data) {
        if(err) return console.error(err);
        fs.writeFile(file2,data,function (err) {
            if(err) {
                console.log("异步写入错误:" + err);
            }else {
                console.log("异步写入成功");
            }
        });
    })
}
copy("data.txt","data1.txt");