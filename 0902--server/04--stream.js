/**
 * Created by 张红玉 on 2016/9/2.
 */
var fs=require("fs");
//以流的方式读文件
var files=fs.createReadStream("./test.txt");
//创建写入流  以流的方式写文件
var out=fs.createWriteStream("./msg.txt");
files.on("open",function(){
   console.info("文件被打开了...");//telnet 127.0.0.1 port
});
files.on("data",function(data){
    console.info("读取数据 ：",data.toString());
    out.write(data,function(){//将test里的数据写入到msg里面去
        console.info(data.toString());//以覆盖的形式写入的
    })
});
files.on("end",function(){
    console.info("文件已经写入完成...");
    out.end();
});
files.on("close",function(){
    console.info("文件被关闭了...");
});
files.on("error",function(err){
    console.info( err );
});
