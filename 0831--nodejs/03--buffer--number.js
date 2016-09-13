/*
/!**
 * Created by 张红玉 on 2016/8/31.
 *!/*/
    var buf=new Buffer( [0x10,0x20] );
    console.info( buf.readUInt8() );
   /* console.info( buf.readUInt8(1)+"\n");
*/
    //将位置0的改写成30  无符号写
    buf.writeUInt8(30,0);
    buf.writeUInt8(40,1);

    //有符号写
    buf.writeInt8(-1);
    console.info( buf );