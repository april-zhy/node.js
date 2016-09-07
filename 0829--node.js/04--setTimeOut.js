/**
 * Created by 张红玉 on 2016/8/29.
 */
var test=function(msg){
    console.info( msg );
}

//多少毫秒之后执行所指定的方法一次，函数名，间隔时间，运行的函数的参数
var timer=setTimeout( test,1000,"hello world" );

var count=1;
function test1(msg){
    console.info(msg+"  " +count);
    count++;
    if ( count==10 ){
        clearInterval(myInterval);
    }
}

var myInterval=setInterval(test1,1000,"你好 ");