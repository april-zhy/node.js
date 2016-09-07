/**
 * Created by 张红玉 on 2016/8/30.
 */
    var yc=require("./test.js");
    var myyc=new yc();
    console.log("获取公有属性： "+myyc.name);//为默认的navy
    console.log("获取公有属性： "+myyc.age);//undefined,因为在对象中没有将此公有属性传递到模块外，所以获取不到

    console.info( "通过方法获取公有属性："+myyc.getName()+"\n" );//undefined,因为我们在new的时候，没有给定参数，即用户名和年龄


    var myyc1=new yc("tom",30);
    console.info( myyc1.getAge() );//20
    console.info( myyc1.getName()+"\n" );//匿名

    myyc1.setAge(29);
    myyc1.setName("smith");
    console.info( myyc1.getAge() );//18
    console.info( myyc1.getName() +"\n");//smith

    console.info( myyc1.show() );

