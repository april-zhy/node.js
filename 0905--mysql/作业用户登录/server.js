/**
 * Created by 张红玉 on 2016/9/7.
 */

var querystring=require("querystring");
var fs=require("fs");
var url=require("url");
var mysql=require("mysql");

var sql_name;
var sql_pwd;

var uname;
var pwd;
var sex;

var querystring=require("querystring");
var server=require("http").createServer().listen(5555,function(){
    console.info("服务器已经启动");
});
//创建数据库连接
var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    database:"user",
    user:"root",
    password:"aaaa"
});

connection.connect(function(err){
    if(err){
        console.error("数据库连接失败");
    } else {
        console.info("数据库连接成功");
        connection.query( "select * from usersInfo",{},function(err,result){
            if(err){
                console.info("学生信息查询失败");
            }else {
                console.info("学生信息查询成功");
                sql_name=result[0].uname;
                sql_pwd=result[0].pwd;
               /* console.info( result );
                console.info( sql_name );*/
            }
        });
        //当有客户端发请求，则触发这个事件
        server.on("request",function(req,res){
            console.info("有人连接进来了");
            if ( req.url!="/favicon.ico"  ){
                var urlObj=url.parse(req.url);//将请求地址转换成一个对象
                //则先获取用户名和密码
                var dataObj=querystring.parse(urlObj.query);
                uname=dataObj.uname;
                pwd=dataObj.pwd;

                //console.info("pathname: ", dataObj );

                //根据不同的请求地址，进行不同的处理并返回不同的结果‘
                if ( urlObj.pathname=="/" ){
                    res.write( fs.readFileSync("./index.html","utf-8") );
                } else if( urlObj.pathname=="/login" ){
                    if ( uname==sql_name && pwd==sql_pwd ){
                        res.write("<meta charset='utf-8' /> ");
                        res.write("welcome ");
                    }else {
                        res.write("<meta charset='utf-8' /> ");
                        res.write("user or uname is error");
                    }
                    //显示注册的页面
                }else if(urlObj.pathname=="/showreg"){
                    res.write( fs.readFileSync("./register.html","utf-8") );
                }else if(urlObj.pathname=="/regist"){
                    //判断数据库中是否存在该用户名
                    var urlObj=url.parse(req.url);//将请求地址转换成一个对象
                    //则先获取用户名和密码
                    var dataObj=querystring.parse(urlObj.query);
                    uname=dataObj.uname;
                    pwd=dataObj.pwd;
                    sex=dataObj.sex;
                    sex=sex=="female"?"女":"男";


                    console.info("dataObj: ",dataObj )
                    console.info("uname: "+ uname );
                    console.info("pwd: "+pwd );
                    console.info("sex: "+sex );

                    connection.query( "insert into usersInfo set ?",{uid:0,uname:uname,sex:sex,age:18,pwd:pwd},function(err,result){
                        if(err){
                            console.info("用户信息添加失败");
                            console.info( err );
                        }else {
                            console.info("用户信息添加成功");
                            console.info(result);
                        }
                    });
                }
            }
            res.end();
        });
//当有客户端连接到服务器
        server.on("connecntion",function(socket){
            console.info( socket.address() );
        });
        server.on("close", function () {
            console.info( "服务器被关闭" );
        });

        server.on("error",function(err){
            console.info( err );
            if ( err.code=='EADDRINUSE' ){
                console.info("端口号被占用");
            }
        });
        server.on("end",function(socket) {
            console.info("已经结束");
        });
    }
});


