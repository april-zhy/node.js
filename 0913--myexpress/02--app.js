/**
 * Created by 张红玉 on 2016/9/13.
 */
var app=require("express")();
//使用路由功能    /index/:id(\\d)/:name?
app.get("/index/:id/:name?",function(req,res){
   console.info(req);
    var str="";
    for(var key in req.params){
        if(str!=""){
            str+="<br />"
        }
        str+="参数名： "+key+"  参数值： "+req.params[key].toString();
    }
    res.send(str);
    res.end();
});

app.listen(5555,function(err){//监听5555端口
    if(err){
        console.error(err);
    }else {
        console.info("服务器起动成功..");
    }
});
