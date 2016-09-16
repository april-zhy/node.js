/**
 * Created by 张红玉 on 2016/9/7.
 */
var mysql=require("mysql");

var pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa",
    connctionLimit:20,
    queueLimit:10
});

pool.getConnection(function(err,connection){
    if(err){
        console.info(err);
    }else {
        //查询所有班级及每个班级学生的信息
        //connection.query({sql:"select * from classInfo c,stuInfo s where c.cid=s.cid",nestTables:"_"},function(err,result){

        //左外连接 ：以left join左边的表为基表，基表中所有的数据都显示，非基表中的没有的用Null补空  right join 右外链接  full join 完全外链接  inner join 内连接
        connection.query({sql:"select * from classInfo c right join stuInfo s on c.cid=s.cid",nestTables:"_"},function(err,result){

        //分页查询  limit n,m n:表示从第几条记录开始显示  m:显示几条
        //查询第n页，每页m条  limit (n-1)*m,m  eg:查询第一页，则（n-1)=0  从第0条记录开始查询
        //connection.query({sql:"select * from classInfo order by cid limit 2,2",nestTables:"_"},function(err,result){
            result.forEach(function(row){
               var str="";
                for(var attr in row){
                    str+=row[attr]+"\t";
                }
                console.info(str);
            });
            connection.release() ;//将连接还给数据库连接池
            pool.end();//关闭连接池
        });
    }

});