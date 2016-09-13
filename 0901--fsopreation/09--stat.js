
var fs=require("fs");
fs.stat("./test.txt",function(err,stats){
    console.info(stats);
})