/**
 * Created by 张红玉 on 2016/8/30.
 */

    //手动触发自定义事件
var http=require("http");
var events=require("events");
var server=http.createServer();

//绑定自定义事件
server.on("ycEvent",function(arg1,arg2,arg3){
    console.info("触发自定义事件");
    console.info(arg1+"  "+arg2+"  "+arg3);
});

//触发自定义事件
server.emit("ycEvent",10,20,30);
server.listen(5555);
//查看事件上绑定的监听事件的数量
console.info( events.EventEmitter.listenerCount(server,"ycEvent") );