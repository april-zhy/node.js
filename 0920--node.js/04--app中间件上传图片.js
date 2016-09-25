/**
 * Created by 张红玉 on 2016/9/20.
 */
//var  app=require("express")();
var express=require("express");
var bodyparser=require("body-parser");
var app=express();//通过express模块创建一个应用程序对象

//static中间件‘.
//app.use(express.static(__dirname));
app.use(bodyparser.urlencoded);
app.get("/userlogin",function(req,res){
    //var urlstr=req.url;
    //urlstr=urlstr.replace("/?","");
    //var obj=querystring.parse(urlstr);
    //console.log( "obj",obj);

    //console.log(req)
    console.log( req.url );
    console.log( req.query );
});

app.post("/userlogin",function(req,res){
    console.log( req );
    console.log( req.query );
    res.send();
});

var server=app.listen(7777,function(err){
    if(err){
        console.error(err);
    }else {
        console.log("服务器已经启动...");
        console.log(server.address());
    }
});