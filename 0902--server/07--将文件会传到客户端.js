/**
 * Created by 张红玉 on 2016/9/2.
 */
var fs=require("fs");
var server=require("http").createServer().listen(6666,function(){
    console.info("服务器已经启动");
});
//当有客户端发请求，则触发这个事件
server.on("request",function(req,res){
    console.info(req.url);//获取客户端请求的地址
    fs.readFile("."+req.url,"utf8",function(err,data){
        if ( err ){
            console.error("出错啦");
            console.error(err);
        }else{
            console.info(req.url);
            res.write("<meta charset='utf-8' />");
            res.write(data);
            res.end("bye");
        }
    });
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