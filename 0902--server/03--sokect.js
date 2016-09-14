/**
 * Created by 张红玉 on 2016/9/2.
 */
var net=require("net");
var server=net.createServer(function(socket){

});

//当端口设置为0时，则系统随机分配一个端口号
server.listen(0,function(){
   console.info("服务器开始启动，监听的端口号为：%j",server.address());
});