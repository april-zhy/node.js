/**
 * Created by 张红玉 on 2016/8/29.
 */
var http=require('http');//引入http模块  =》 <script src=''></script>
http.createServer(function( request,response ){//创建一个服务器
    //客户端发送给服务器的信息被封装在resqest对象中，即，服务器要获取客户端的信息，必须要通过request这个对象
   /* console.info( request );
    console.info( response );*/
    response.write("hello world");
    response.end();//响应结束
}).listen(6666);//指定服务器监听的ip地址和端口号，如果接受所有的ip地址，则ip地址可以省略.
/*端口号：0~65535  1024预留给系统  每个应用程序都对应一个端口号*/
console.info( "服务器已经启动，占用端口号是6666" );