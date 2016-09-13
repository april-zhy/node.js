/*
/!**
 * Created by 张红玉 on 2016/8/31.
 *!/*/
    var buf=new Buffer("源辰信息科技有限公司");
    var copyBuf=new Buffer(40);
    buf.copy( copyBuf,0,0 );

/*copy( targetBuffer,targetStart,sourceStart,sourceEnd ):
* 第一个参数：表示将源数据复制到新的对象，
* 第二个参数：是从新对象的那个位置开始存放复制过来的对象，
* 第三个参数：是从源数据的那个位置开始复制
* 第四个参数：是从源数据中复制的长度，若不填则默认是源数据的长度
* */
    console.info( copyBuf.toString() );

    //buffer对象的常用方法
    //toString()  将其装换成字符串
    //bytelength()  获取buf的字节长度，即存储空间长度
    //concat()；  拼接多个字符串
    //isEncodeing()  检查是否是一个有效的编码
    //length: 注意：这是一个属性，而不是方法
    //toJSON():转为JSON对象
    //buf1.equals( buf2 );  //判断是否相等，返回true false
    //buf1.conpare( buf2);  //比较两个buf对象，但是返回一个数字