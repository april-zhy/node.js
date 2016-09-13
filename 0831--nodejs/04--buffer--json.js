/*
/!**
 * Created by 张红玉 on 2016/8/31.
 *!/*/
    var buf=new Buffer( "源辰信息科技有限公司" );
    console.info( buf +"\n");

    //将buf转换成JSON格式的字符串
    var json=JSON.stringify(buf);
    var jsonObj=JSON.parse( json );//将json字符串格式转换成json对象
    console.info( json+"\n");
    console.info( json.data );//undefined  json为json类型字符串
    console.info( jsonObj.data+"\n" );//这时候就可以过对象名.属性取值了

    //将字符串对象转换成一个BUFFER对象
    var str=new Buffer( jsonObj );
    console.info( str );
    console.info( str.toString() );

