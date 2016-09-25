/**
 * Created by 张红玉 on 2016/9/20.
 */
//var  app=require("express")();
var express=require("express");
var app=express();//通过express模块创建一个应用程序对象

//指定这个应用程序使用express模块中的static中间件，并指定当前服务器文件所在的目录为基址
//app.use(express.static(__dirname));


app.get("/userlogin",function(req,res){
    console.info( req.params );
});
//static中间件
app.get("/*",function(req,res){
    console.log("__dirname+req.url   :  ",__dirname+req.url);
    console.log("__dirname   :  ",req.url);
   res.sendfile(__dirname+req.url);

});

app.listen(6868,function(err){
    if(err){
        console.error(err);
    }else {
        console.log("服务器已经启动...");
    }
});