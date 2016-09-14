/**
 * Created by 张红玉 on 2016/9/4.
 */

var querystring=require("querystring");
var server=require("http").createServer().listen(6667,function(){
    console.info("服务器已经启动");
});
//当有客户端发请求，则触发这个事件
server.on("request",function(req,res){
    //console.info(req.url);
    res.write("sucess  ");
    if ( req.url!="favicon.ico"  ){
        var urls=req.url;
        urls=urls.replace("/?","");
        var obj=querystring.parse(urls);
        console.info( obj );
        res.end();
    }
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


