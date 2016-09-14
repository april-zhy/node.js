/**
 * Created by 张红玉 on 2016/9/4.
 */

var querystring=require("querystring");
var fs=require("fs");
var url=require("url");

var server=require("http").createServer().listen(7777,function(){
    console.info("服务器已经启动");
});
//当有客户端发请求，则触发这个事件
server.on("request",function(req,res){
    res.write("hhahahh");
    if ( req.url!="/favicon.ico"  ){
       var urlObj=url.parse(req.url);//将请求地址转换成一个对象
       // console.info( urlObj )
        //根据不同的请求地址，进行不同的处理并返回不同的结果‘
        if ( urlObj.pathname=="/" ){
            fs.readFile("./index.html","utf-8",function(err,data){
                if ( err ){
                    console.info("出错啦");
                }else {
                   res.write(data);
                }
            });
        } else if( urlObj.pathname=="/addUser" ){
            //如果是添加用户请求，则先获取用户名和密码
            var dataObj=querystring.parse(urlObj.query);
            if ( dataObj.uname=="zhy" && dataObj.pwd=="123" ){
                res.write("welcome ");

                console.info("success");
            }else {
                res.write("用户名或密码错误");
                console.info("user or uname is error")
            }
        }
    }
   // res.end();
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


