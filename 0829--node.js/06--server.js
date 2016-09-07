/**
 * Created by 张红玉 on 2016/8/29.
 */
var http=require("http");//导入http模块
var server=http.createServer();//创建一个http服务器

server.on("request",function(req,res){//创建监听函数，每发一次请求，就会触发这个监听事件一次
   console.info( req.url );
    res.write("<meta charset='utf-8' />");
    res.write("谢谢访问");
    res.end();
});

server.listen(6666);//启动服务器，并监听6666端口