
var fs=require("fs");
//fs.truncate("./test.txt",42,function(err){//截断只剩下42个字节
//    if (err){
//        console.info("出错啦");
//    }else {
//        console.info("截断成功");
//    }
//});

//监视文件


fs.watchFile("./01.txt",{},function(curr,prev){

    console.info(prev);
    if( Date.parse( prev.ctime )==0 ){
        console.info("文件被删除了...");
        console.info( Date.parse( prev.ctime ) )
    }else if( Date.parse( prev.mtime )!=Date.parse(curr.mtime) ){
        console.info("文件被修改了");
    }

});


/*
var fsWatcher = fs.watch( "./01.txt", function (event, filename) {
    //console.log(event)
});

//console.log(fsWatcher instanceof FSWatcher);

fsWatcher.on('change', function (event, filename) {
    console.log(filename + ' 发生变化')
});

//30秒后关闭监视
setTimeout(function () {
    console.log('关闭')
    fsWatcher.close(function (err) {
        if(err) {
            console.error(err)
        }
        console.log('关闭watch')
    });
}, 30000);*/
