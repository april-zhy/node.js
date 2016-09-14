/**
 * Created by 张红玉 on 2016/9/2.
 */
/*
//第一种方式
var http=require("http");
var server=http.createServer();
server.on("request",function(req,res){
   console.info("有人连接进来了");
    res.write("hahah");
    res.end();
});
server.listen(6666,function(){
   console.info("服务器已经启动");
});*/

//第二种
var server=require("http").createServer().listen(6666,function(){
    console.info("服务器已经启动");
});
server.on("request",function(req,res){
    console.info("有人连接进来了");
    /*res.write("<meta charset='utf-8' />");*/
    res.setEncoding("utf8");
    res.write("哈哈哈");
    res.end();
});