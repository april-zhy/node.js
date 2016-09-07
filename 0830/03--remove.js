/**
 * Created by 张红玉 on 2016/8/30.
 */
var http=require("http");
var events=require("events");
var server=http.createServer();
//默认轻情况下，一个事件可以绑定10个事件处理函数
var testFun=function(req,res){
    if ( req.url!="/favicon.icon" ){
        console.info("接收到了客户端获取图标的信息");
    }
}

server.on("request",function(req,res){
    if ( req.url!="/favicon.icon" ){
        console.info("发送响应信息");
        res.write("<!doctype html><head><title>哈哈哈</title><meta charset='utf-8' /></head>");
        res.write("<body><h1>欢迎</h1></body>");
        res.end();
    }
});

server.on("request",function(req,res){
    if ( req.url!="/favicon.icon" ){
        console.info("发送响应完毕");
    }
});
server.on("request",testFun);
server.removeListener("request",testFun);
server.listen(6666);
console.info( events.EventEmitter.listenerCount(server,"request") );