/**
 * Created by 张红玉 on 2016/9/2.
 */
var fs=require("fs");
var net=require("net");
//创建写入流  以流的方式写文件
var files=fs.createWriteStream("./msg.txt");
var server=net.createServer(function(socket){
    socket.setEncoding("utf8");
    /*可以利用socket对象中的pipe（destination,[options])来接受到的数据写入到指定文件中
     destination：文件
     options：是一个对象，其中有一个boolean类型的属性end，  如果是True； 则当数据接收完毕收自动关闭写操作
     默认值为true
    * */
   /* socket.on("data",function(data){//当客户端有数据
       socket.pipe(files);
    });*/
    socket.pipe(files,{end:false});
    socket.on("end",function(){
        files.end("\r\n--未完待续--");
        console.info("用户已经下线，数据已经写入完成...");
    });
    /*socket.on("close",function(){
        console.info("文件被关闭了...");
    });*/
    socket.on("error",function(err){
        console.info( err );
    });

});

server.listen(8889,function(){
   console.info("服务器开始启动，监听端口为 ：%j",server.address());
});
