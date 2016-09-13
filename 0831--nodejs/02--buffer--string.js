/*
/!**
 * Created by 张红玉 on 2016/8/31.
 *!/*/
    var strDecode=require( "string_decoder" ).StringDecoder;
    var str="源辰信息科技有限公司";
    var buf=new Buffer( str );

    var decoder=new strDecode();
    console.info( decoder.write( buf )+"\n" );//源辰信息科技有限公司


//我们将str存到两个buf中
    var buf1=new Buffer([0xe6,0xba,0x90,0xe8,0xbe,0xb0,0xe4,0xbf,0xa1,0xe6,0x81,0xaf,0xe7]);
    var buf2=new Buffer([0xa7,0x91,0xe6,0x8a,0x80,0xe6,0x9c,0x89,0xe9,0x99,0x90,0xe5,0x85,0xac,0xe5,0x8f,0xb8]);

    //若直接输出，则肯定有个字会乱码
    console.info( buf1.toString()+buf2.toString() );//源辰信息���技有限公司

    //解决方案一：将两个buf拼接起来   但是会影响系统的性能
    var str3=Buffer.concat([buf1,buf2] );
    console.info( str3.toString()+"\n" );//源辰信息科技有限公司

    //解决方案二：利用StringDecoder.write()方法
    console.info( decoder.write( buf1 ) );
    console.info( decoder.write( buf2 )+"\n" );//源辰信息 科技有限公司

    console.info( decoder.write( buf2) );