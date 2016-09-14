/**
 * Created by 张红玉 on 2016/9/2.
 */
var net=require("net");
var server=net.createServer(function(socket){
    server.getConnections( function(err,count){
        console.info("当前 %d 个人在线"+count);
        //设置最大的连接数
        server.maxConnections=2;
        console.info("当前TCP服务器的允许的最大连接数为：%d"+server.maxConnections);
        if( count==2 ){
            console.info("服务器正在被关闭");
            server.close(function(){//当所有的访问被关闭时，则TCP关闭
                console.info( "服务器已经关闭.." );
            });
        }
    });
});

//当端口设置为0时，则系统随机分配一个端口号
server.listen(0,function(){
   console.info("服务器开始启动，监听的端口号为：%j",server.address());
});