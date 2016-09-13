/**
 * Created by 张红玉 on 2016/9/1.
 */
var fs=require("fs");
var fd=fs.openSync("./yc.txt","r");
var buf=new Buffer(100);
var len=fs.readSync(fd,buf,0,12);
console.info( buf.slice(0,12).toString() );//源辰信息

len=fs.readSync(fd,buf,12,12,null);
console.info( buf.slice(12,24).toString() );//科技有限