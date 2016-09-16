/**
 * Created by 张红玉 on 2016/9/7.
 */
var mysql=require("mysql");

var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    database:"stusys",
    user:"root",
    password:"aaaa"
});
