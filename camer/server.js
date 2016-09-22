/**
 * Created by 张红玉 on 2016/9/20.
 */
var express=require("express");
var bodyparser=require("body-parser");
var fs=require("fs");

var app=express();//创建一个APP应用程序
app.use( bodyparser.urlencoded({extened:false}) );//设置这个应用程序的中间件
app.use( express.static(__dirname) );

app.post("/uploadPhoto",function(req,res){
    //console.info(req.body.imageData);
    var bitmap=new Buffer( req.body.imageData,"base64" );
    console.log(bitmap);
    fs.writeFile("../images/"+new Date().getTime()+".png",bitmap,function(err){
       if(err){
           res.send("0");
           console.error(err);
       } else {
           res.send("1");
       }
    });

});

app.get("/getAllPhoto",function(req,res){
   fs.readdir("../images",function(err,files){
       if(err){
           console.log(err);
           res.send("0");
       }else {
           res.send(files);
       }
   })
});

app.listen(5555,function(err){
   if(err){
       console.error(err);
   } else {
       console.info( "服务器启动成功.." );
   }
});