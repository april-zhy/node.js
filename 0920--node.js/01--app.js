/**
 * Created by 张红玉 on 2016/9/20.
 */
//var  app=require("express")();
var express=require("express");
var app=express();//激活


app.listen(0,function(err){
    if(err){
        console.error(err);
    }else {
        console.log("服务器已经启动...");
        //输出端口号
        console.log( express );
      /*  app.path();*/
    }
});