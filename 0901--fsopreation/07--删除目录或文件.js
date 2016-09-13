
var fs=require("fs");
function delFile(path){
    var stats=fs.statSync(path);
    if (stats.isDirectory() ){//如果是一个目录
        //获取当前目录下的所有文件或子目录
        var files=fs.readdirSync(path);
        for( var i=0;i<files.length;i++ ){
            delFile(path+"/"+files[i]);
        }
        //当目录下清空之后将自己删除
        fs.rmdirSync( path );
    }else if( stats.isFile() ){
        fs.unlinkSync(path);
    }
}
delFile( "./0000" );
console.info("删除完成");