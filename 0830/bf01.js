/**
 * Created by 张红玉 on 2016/8/30.
 */

   /* var buf=new Buffer(10);
    buf.fill(10);
    console.info( buf.length);
    console.info(buf);
    console.info("\n");

    var buf2=new Buffer([10,20,30,40,50]);
    console.info( buf2.length);
    console.info(buf2)
    console.info("\n");
    */
    var str="ycinfo";
    var buf3=new Buffer(str,"utf8");
    console.info( buf3.length);
    //输出字母的ASCII值
    console.info(buf3[0]);
    console.info(buf3[1]);
    console.info(buf3[2]);
    console.info(buf3[6]);
    console.info("\n");



    var str2="源辰信息科技有限公司";
    var buf4=new Buffer(str2,"utf8");
    /*console.info( str2.length );
    console.info( buf4.length);
    console.info(buf4);
    console.info("\n");
*/
    //字符串不可以更改，但是buffer可以  在utf-8里面，一个中文字符占3个字节  所以第二个字的索引从3开始
    console.info( buf4[3] );
    console.info( buf4[4] );
    console.info( buf4[5] );

    //字符串对象不可变
    str[1]=["c"];

    //修改第一个字
    buf4[0]=232;
    buf4[1]=190;
    buf4[2]=176;

    console.info( buf4.toString() );
    console.info(str)