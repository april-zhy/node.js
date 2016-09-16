/**
 * Created by 张红玉 on 2016/9/5.
 */
var mysql=require("mysql");//导入Mysql模块

//创建书库库连接
var connection=mysql.createConnection({
   host:'127.0.0.1',
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa"
});

//连接到数据库
connection.connect(function(err){
   if(err){
       console.info("数据库连接失败");
   } else {
       console.info("数据库连接成功");
       connection.end(function(err){
           if(err){
               console.info("数据库关闭失败");
           } else {
               console.info("数据库关闭成功");
           }
       });
   }
});