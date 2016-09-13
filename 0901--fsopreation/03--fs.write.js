/**
 * Created by 张红玉 on 2016/9/1.
 */
/*
fs.write(fd,buffer,offset,length,position,callback)
 fd:必须为open方法所使用的回调函数中返回的文件描述，或openSync方法返回的文件描述符
 * buffer:为一个Buffer对象，用于指定将文件数据写入到那个缓存区中
 * offset：从缓存区中读取数据的开始位置
 * length：写入数据的长度
 * position：写入文件的开始位置  以字节为单位
 * callback:function(err,writelen,buffer){}
 *      err:写入文件失败是出发的错误对象
 *      writelen:一个整数，写入的字节长度
 *      buffer:表示要被读取的缓存区
*/
var buf=new Buffer("哈哈，呵呵！");
var fs=require("fs");
fs.open("./yc.txt","a+",function(err,fd){
    if (err){
        console.info("打开文件失败")
    }else {
        fs.write(fd,buf,0,6,0,function(err,writelen,buffer){
            if(err){
                console.info("写入文件失败");
            }else {
              /*  console.info(writelen);//写入的长度
                console.info( buffer.toString() );
                console.info( buf.toString() );*/
                fs.write(fd,buf,6,12,null,function(err,len,buffer){
                    if (err){
                        console.info("写入文件失败");
                    }else {
                        console.info("写入文件完成");
                    }
                })

            }
        });
    }
});

