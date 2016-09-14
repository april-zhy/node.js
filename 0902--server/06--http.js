/**
 * Created by 张红玉 on 2016/9/2.
 */

var server=require("http").createServer().listen(6668,function(){
    console.info("服务器已经启动");
});
server.on("request",function(req,res){
    console.info("有人连接进来了");
    res.write("<meta charset='utf-8' />");
    res.write("哈哈哈");
    res.end();
    //server.close();
});
//当有客户端连接到服务器
server.on("connecntion",function(socket){
   console.info( socket.address() );
});
server.on("close", function () {
    console.info( "服务器被关闭" );
});

server.on("error",function(err){
    console.info( err );
    if ( err.code=='EADDRINUSE' ){
        console.info("端口号被占用");
    }
});