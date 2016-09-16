/**
 * Created by 张红玉 on 2016/9/7.
 */
var mysql=require("mysql");
var fs=require("fs");
var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa"
});

var out=fs.createWriteStream("./data.txt");//数据写出流，将督导的数据写出到当前目录的data.txt文件中

out.on("error",function(err){
    console.info("数据写入失败",err);
    process.exit();//退出程序
});

connection.connect(function(err){
    if(err){
        console.info("出错啦",err);
    }else {
        var result=connection.query({sql:"select * from stuInfo s inner join classInfo c on s.cid=c.cid",nestTables:"_"});
        result.on("error",function(err){
            console.info("出错啦",err);
            process.exit();//退出程序
        });

        result.on("fields",function(fields){//读取返回结果集总每一列的列信息
            var str="";
            console.info("fields: "+fields);
            //循环取
            fields.forEach(function(field){
                //console.info("field: ",field);
                str+=field.name+"\t";
                //return str;
            });
           // console.info( str+"\t\n" );
            out.write( str+"\t\n" );
        });

        result.on("result",function(row){
            connection.pause();
            out.write(row.s_sid+"\t"+row.s_sname+"\t"+row.s_cid+"\t"+row.s_sex+"\t"+row.s_age+"\t"+row.s_pwd+"\t"+
                row.s_tel+"\t"+row.c_cid+"\t"+row.c_cname+"\t"+row.c_status+"\t\n","utf8",function(err){
                if(err){
                    console.info(err);
                    process.exit();//退出程序
                }else {//如果没有错误则读取下一行
                    connection.resume();
                }
            });
        });

        result.on("end",function(){
            console.info("学生信息读取完毕");
            connection.end();//关闭连接
        });
    }
});