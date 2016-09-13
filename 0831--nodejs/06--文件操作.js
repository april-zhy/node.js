/**
 * Created by 张红玉 on 2016/8/31.
 */
    var fs=require("fs");
/*
 fs.write(filename,data[,option],callback);
* 第一个参数：文件的路径和名称
* 第二个参数：写入的数据
* 第三个参数：写入独居是的一些信息参数信息，这一项可选
*   options残花是一个第一对象：
*       flag属性：用于指定以书面方式操作，默认是W  可选项是w r x
*       mode属性：用于指定文件被打开时的读写权限，默认是0666(可读写)
*               使用4个数据表示mode属性的值，其中一个表示特殊权限，一般为0
*               第二个是指文件或目录所有者的权限  uesrs
*               第三个是指文件或目录所有者所属组的其他成员的权限  groups
*               第四个是指其他人的权限   others
*        encoding属性：指定编码集，可选项  utf8,ascii,base64
* 第四个参数：回调函数
* */
   /* fs.writeFile( "./yc","源辰信息","utf8",function(err){
        if( err ){
            console.log( "写入文件失败" );
        }else{
            console.info("写入数据完成");

        }
    } );*/


//异步
    /*fs.readFile("./yc","utf8",function(err,data){
        if ( err ){
            console.error("出错啦");
        }else{
            console.info( data );
        }
    });
    console.info( "结束" );

//同步
var data=fs.readFileSync("./01--buffer.js","utf8");
console.info( data );*/

//追加文件   异步  以追加的方式写入文件
fs.appendFile("./yc","\r\n这是新加的数据",{
    encoding:"utf8"
},function(err){
    if (err){
        console.info("出错的");
    }else {
        console.info("文件追加完成");
        console.info( fs.readFileSync("./yc").toString() );
    }
});

//同步
fs.appendFileSync("./yc","\n 这是同步方式追加的数据");