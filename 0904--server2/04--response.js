var http=require("http");
/*var JSON=require("JSON");*/

/*var options={//http://www.baidu.com
    host:"www.baidu.com",
    port:80,
    path:"/",
    method:"get"
}*/
var options={//http://www.baidu.com
    host:"127.0.0.1",
    port:7777,
    path:"/",
    method:"get"
}
// "http://127.0.0.1:7777"
var req=http.request(options,function(res){
    console.info( res.statusCode );//获取响应码
    console.info( JSON.stringify( res.headers ) );//获取响应头信息，并将其转换成一个JSON格式的字符串
    res.on("data",function(data){
        console.info( data.toString() );
    });
});
req.write("cccccccccccccccccccc");
req.on("error",function(err){
   console.info(err);
});

req.end();