/**
 * Created by 张红玉 on 2016/9/7.
 */
var connection=require("./connection").conn;

connection.connect(function(err){
    if(err){
        console.error(err);
    }else {
        //第三种方案：在每个字段前面加上字段的所属表
        connection.query({ sql:"select * from stuInfo s,classInfo c where s.cid=c.cid",nestTables:"_" },function(err,result){
           if(err){
               console.error( err );
           } else {
               console.info( result );
           }

            console.end();
        });
    }
});















connection.pause();
out.write(row.s_id+"\t"+row.s_name+"\t"+row.s_cid+"\t"+row.s_sex+"\t"+row.s_age+"\t"+row.s_pwd+"\t"+
    row.s_tel+"\t"+row.c_cid+"\t"+row.c_cname+"\t"+row.c_status+"\t\n","utf8",function(err){
    if(err){
        console.info(err);
        process.exit();//退出程序
    }else {//如果没有错误则读取下一行
        connection.resume();
    }
});