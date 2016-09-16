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
       if (err){
           console.info( "数据库连接失败" );
       }else{
          /* connection.query( "insert into classInfo set ?",{cid:0,cname:"YC26",status:1},function(err,result){
                if(err){
                    console.info("班级信息添加失败");
                }else {
                    console.info("班级信息添加成功");
                    console.info(result);
                    console.info(result.insertId);
                }
           });  */            //(0,"天天",1001,"男",20,"tt","10212518427");
           connection.query( "select * from stuInfo",{},function(err,result){
               if(err){
                   console.info("学生信息查询失败");
               }else {
                   console.info("学生信息查询成功");
                   console.info(result);
                   console.info(result.insertId);
               }
           });
           console.info("数据库连接成功");
       }
    });



