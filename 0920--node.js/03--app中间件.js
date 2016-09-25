/**
 * Created by 张红玉 on 2016/9/20.
 */
//var  app=require("express")();
var express=require("express");
var querystring=require("querystring");
var app=express();//通过express模块创建一个应用程序对象

//static中间件‘.
app.use(express.static(__dirname));

app.get("/userlogin",function(req,res){
    var urlstr=req.url;
    urlstr=urlstr.replace("/?","");
    var obj=querystring.parse(urlstr);
    console.log( "obj",obj);

    //console.log(req)
    console.log( req.url );
    console.log( req.query );
});

app.listen(6869,function(err){
    if(err){
        console.error(err);
    }else {
        console.log("服务器已经启动...");
    }
});