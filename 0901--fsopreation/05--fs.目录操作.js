/**
 * Created by 张红玉 on 2016/9/1.
 */
var fs=require("fs");
//创建名称为test的目录
/*fs.mkdir("./test",function(err){
    if (err){
        console.info("目录创建失败");
    }else{
        console.info("目录创建成功");
    }
});*/

//同步方式
//fs.mkdir("./temp");

//读取目录
//可以 通过fs.readdir(path,callback)来读取目录
fs.readdir("./",function(err,files){
    if (err){
        console.info("目录读取失败");
    }else{
        console.info("读取成功");
        console.info("异步读取方式: "+files+"\n\n");
    }
});

//同步读取
/*var fls=fs.readdirSync("./");
console.info("同步读取方式: "+fls);*/

//作业，，返回指定文件夹的大小
//var total=0;
//function getSize(path){
//    var stats=fs.statSync(path);
//    if (stats.isDirectory() ){//如果是一个文件
//        //获取当前目录下的所有文件或子目录
//        var files=fs.readdirSync(path);
//        for( var i=0;i<files.length;i++ ){
//            getSize(path+ "/"+files[i] );
//        }
//    }else if( stats.isFile() ){
//        total+=stats.size;
//    }
//    return total;
//}
//
//console.info( getSize("../0901  文件操作") );




//查看文件或目录信息  fs.stat(path,callback)
/*fs.stat("../0901  文件操作",function(err,stats){
    if (err){
        console.info("出错啦");
    }else {
        if ( stats.isFile() ){
            console.info(  stats  );
            console.info( "文件大小"+ stats.size  );
        }else if( stats.isDirectory() ){
            console.info("目录大小 : "+  stats.size  );
            console.info(  stats  );
        }
    }
});*/



//判断文件或目录是否存在
/*fs.exists("./yc.txt",function(exists){
    console.info(  exists);//true
});*/


/*
fs.realparh(path,[cache],callback);*/
/*fs.realpath("./yc.txt",function(err,path){
    if (!err){
        console.info(path);//输出指定文件的绝对路径
    }
});*/

//cache: 一个对象，其中存放一些预先指定的路径

/*
var cache={"/abc","test.txt"};
fs.realpath("./yc.txt",function(err,path){
    if (!err){
        console.info(path);//输出指定文件的绝对路径
    }else {
        console.info(err);
    }
});*/
