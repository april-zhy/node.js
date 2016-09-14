/**
 * Created by 张红玉 on 2016/9/2.
 */
var net=require("net");
//创建服务器
/*var server=net.createServer( function( socket ){//套间字
    console.info(  "有客户端连接上来了 " );
    console.info( socket );
});*/
//启用服务器
/*
server.listen(8888);  server.listen(8888,"127.0.0.1");*/
/*server.listen(8888,function(){
    console.info("服务器开始监听");
    var addr=server.address();
    console.info("监听地址为：%j",addr);//字符串( %s)  整型 ( %d or %i)  浮点型：( %f )  对象：( %o or %j )
});*/

/*var server=net.createServer().listen(8888);
server.on("connection",function(socket){
   console.info("有客户端连接上来了");
    console.info(socket);
});*/

var server=net.createServer().listen(8888);
server.on("connection",function(socket){
    console.info("有客户端连接上来了");
    console.info( server.address().address );
});