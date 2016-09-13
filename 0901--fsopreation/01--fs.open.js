/**
 * Created by 张红玉 on 2016/9/1.
 */
var fs=require("fs");
//err:错误  fd：指定的打开的这个文件的一个引用
/*fs.read(fd,buffer,offset,length,position,callback)
* fd:必须为open方法所使用的混掉函数中返回的文件描述，或openSync方法返回的文件描述符
* buffer:为一个Buffer对象，用于指定将文件数据读取到那个缓存区中
* offset：指定想缓存区中写入数据时的开始位置
* length:指定从文件中读取的的字节数  bt
* position：指定读取文件时的开始位置
* callback:function(err,bytesRead,buffer){}
* */

/*      fs.open(filename,flags [,mode] [,callback(err,fd)] */
fs.open("./yc.txt","r",function(err,fd){
   if (err){
       console.info("读取失败");
   }else{
       var buf=new Buffer(255);
      /* fs.read(fd,buf,0,12,0,function(err,bt,bf){
           console.info(bt);//实际读取的字节数  12
           console.info(bf.slice(0,bt).toString() );  //源辰信息
       });*/
       //position:如果该采纳数为Null  则当前读取位置=（前一次读取时的开始位置+读取字节数）
       fs.read(fd,buf,12,12,null,function(err,len,bf){
           console.info( len );//实际读取的字节数
           console.info(  bf.slice(12,24).toString()  );
           console.info(bf.slice(0,len).toString() );
       });
   }
});
