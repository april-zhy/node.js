/*
/!**
 * Created by 张红玉 on 2016/8/31.
 *!/
    var buf=new Buffer("源辰信息科技有限公司");
    var str=buf.slice(3,6);//一个汉字是三个字节  第三个到第六个  第六个不会截取
    console.info( str.toString() );//辰
    console.info( buf.toString() );

    //修改通过slice()方法取出的值
    str[0]=buf[0];
    str[1]=buf[1];
    str[2]=buf[2];
    //此时buf对象中的值也被修改了，由于Buffer对象中的slice（）方法并不是复制缓存区中的数据。而是与该数据共享内存区域，因此，
    //如果修改字符串的值，那么缓存区中的数据也被修改

    console.info( buf.toString() );

    //buffer对象与字符串对象
    //buf.toString( [encodeing],[start],[end] );
    console.log( buf.toString( "utf8",0,12 )   );
    console.log( buf.toString( 0,12 )   );//如果不写编码集，则从12开始，因为有是三个参数，只写两个，


*/
    var str="源辰信息科技有限公司";
    var buf=new Buffer( str );
    console.info( buf.toString() );

    //重写buf对象中的值
    buf.write( "ycycyc",27,33 );
    console.info( buf.toString() );