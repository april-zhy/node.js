/**
 * Created by 张红玉 on 2016/8/29.
 */

    //console.info( global );;
   /* console.info(  __dirname );//当前执行的文件的绝对目录  即父级目录
    console.info( __filename );//当前执行的文件的绝对路径  包括当前文件名*/

   /* console.log( "this is a log1" );
    console.info( "this is a log2" );
    console.error( "this is a log3" );
    console.warn( "this is a log4" );*/

    //time  timeEnd  测试代码段所有的事件
  /*  console.time( "test" );//任意给定一个字符串，但跟timeEnd保持一致
    for( var i=0;i<100;i++ ){

    }
    console.timeEnd("test");
*/
/*注意：因为是异步的，所以输出的顺序不一定一样*/

    //process  输出流
    //process.stdout.write("thid \n");
    //process.stderr.write("thid ");

    //输入流
    /*process.stdout.write("请输入：\n");
    process.stdin.setEncoding("utf-8");
    process.stdin.on("data",function(data){
       console.info( data+"\n" );
    });*/
  /*  process.stdout.write("请输入：\n");
    process.stdin.setEncoding("utf-8");
    process.stdin.on("readable",function(){
        console.info( process.stdin.read()+"\n" );
    });*/

  /*  var yc=require("./05--yc.js");
    var yc2=require("./05--yc.js");
     yc.output("0901  文件操作") ;
    yc2.output("zzz") ;*/
   /* console.info( yc.output() );*/

console.info.( process.argv );

