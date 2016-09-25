/**
 * Created by 张红玉 on 2016/9/13.
 */
   /* var express=require("express");
    var app=express();*/
var app=require("express")();
/*
app.get("/",function(res.req){
    res.writeHeader(200,"OK",{"Content-Type":"text/html;charset='utf-8'"});
    res.write("谢谢访问");
    res.end();
});*/

app.get("/",function(req,res){
    /*res.send("谢谢访问....");    绝对路径*/
    res.sendfile(__dirname+"/goodstype.html");
});

app.listen(6868,function(err){
    if(err){
        console.error(err);
    }else {
        console.info("服务器起动成功..");
    }
});
