/**
 * Created by 张红玉 on 2016/9/7.
 */
var http=require("http");
var mysql=require("mysql");
var querystring=require("querystring");
var fs=require("fs");
var url=require("url");
var buf=new Buffer(30);

var server=http.createServer().listen(8888,function(){
    console.info("服务器已经启动...");
});

var pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa",
    connectionLimit:20,
    queueLimit:10
});

server.on("request",function(req,res){
    if(req.url!="/favicon.ico"){
        var urlobj=url.parse(req.url);
        var path=urlobj.pathname;
        //console.info( path );
        if(path=="/"){
            readFile("./login.html",res);
        }else if( path=="/getAllClassInfo" ){
            pool.getConnection(function(err,connection){
                if(err){
                    res.write("{code:0}");
                    res.end();
                }else {
                    connection.query("select * from classInfo order by cid asc",function(err,rows){
                        if(err){
                            res.write("{code:1}");
                            res.end();
                        }else {
                            res.write(JSON.stringify(rows));
                            res.end();
                        }
                    });
                }
            });
        }else if(path=="/addUser"){//说明是学生注册
            //注意此时我们采用的是post提交方式，数据不在url里面，所以不能直接从url中获取
            //post提交数据时，请求头信息和数据时分开传送的，先发送请求头信息，然后发送数据，所以我们需要通过监听来完成数据接收
            //获取学生的注册信息
            req.on("data",function(data){
                var dataInfo=querystring.parse(data.toString());
                //console.info("一个", dataInfo );
               if(dataInfo.sex==""){
                   res.write("2");
                   res.end();
               }else {
                   dataInfo["sid"]=0;
                   //console.info( "第二个",dataInfo );
                   //将用户提交的注册信息存入数据库
                   pool.getConnection(function(err,connection){
                       if(err){
                           res.write("0");
                           res.end();
                       }else {
                           connection.query("insert into stuInfo set ?",dataInfo,function(err,results){
                               if(err){
                                   res.write("1");
                                   res.write(err+"");
                               }else {
                                   res.write( results.insertId+"" );
                               }
                               res.end();
                           });
                       }
                   });
               }

            });
        }else if(path=="/login"){
            //先得到用户名和密码
           req.on("data",function(data){
               var dataInfo=querystring.parse(data.toString());
               if(dataInfo.sid==""){//说明为学号为空
                   res.write("1");
                   res.end();
               }else if(dataInfo.pwd==""){
                   res.write("2");
                   res.end();
               }else {//说明学生输入了学号和密码,那我们就要从数据库查询，是否存在该学号
                   pool.getConnection(function(err,connection){
                        if(err){
                            res.write("3");//数据库连接失败
                            res.end();
                        }else {
                            connection.query("select * from stuInfo where sid=? and pwd=?",[dataInfo.sid,dataInfo.pwd],function(err,result){
                                if (err){
                                    res.write("4");//查询数据失败
                                }else {
                                    if(result.length==0){//说明未查询到，学号或密码错误
                                        res.write("0");
                                    }else {
                                        res.write("5");
                                    }
                                }
                                connection.release();//释放连接
                                res.end();
                            });
                        }
                   });
               }
           });
        } else if(path=="/showStuInfo"){
            pool.getConnection(function(err,connection){
                if(err){
                    res.writeHeader(500,"ERROR",{"Content-Type":"text/json"});
                    //res.write("{code:0}");
                }else {
                    connection.query("select s.*,cname from stuInfo s inner join classInfo c on s.cid=c.sid",function(err,rows){
                        if(err){
                            //buf.write(err);
                            res.writeHeader(500,"ERROR",{"Content-Type":"text/json"});
                            res.write("{code:"+err+"}");
                            res.end();
                        }else {//则查询
                            res.writeHeader(200,"OK",{"Content-Type":"text/json"});
                            res.write(JSON.stringify(rows));
                            res.end();
                        }
                    });
                }
            });
        } else {
            readFile("."+path,res);
        }
    }else {
        res.end();
    }

});

//读取指定路径的文件
function readFile(path,res){
    //判断文件是否存在
    fs.exists(path,function(exists){
        if(exists){
            var file=fs.createReadStream(path);
            file.on("data",function(data){
                res.write(data);
            });
            file.on("end",function(){
                res.end();
            });
        }else {
            res.writeHeader(404,"Not Fund",{"Content-Type":"text/html;charset=utf-8"});
           // res.write("<meta charset='utf-8' />");
            res.write("<h1>404页面未找到</h1>");
            res.end();
        }
    });

}

















