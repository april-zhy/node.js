/**
 * Created by 张红玉 on 2016/8/30.
 */
/*
console.log("test.js");*/
var __name,__age;//私有变量，用两个下划线
var name="匿名",age=20;//公有变量
//自定义对象方式：1.工厂模式  2.构造方法模式  3.原型模式  4.
var yc=function(name,age){
    //构造方法，当我们new这个对象的时候调用
    console.log("调用了构造方法。。。")
    __name=name;
    __age=age;
}

//提供一个获取私有变量__name的值得方法
yc.prototype.getName=function(){
    return __name;
}

//提供一个获取私有变量__age的值得方法
yc.prototype.getAge=function(){
    return __age;
}

//提供一个公有的方法，用来修改私有变量的值
yc.prototype.setName=function(name){
    __name=name;
}

yc.prototype.setAge=function(age){
    //在这个公有的方法中，我们可以做一些基本的校验，用来处理用户给定的数据是否符合要求
   if (age<10 || age>100){
       __age=18;
   }else {
       __age=age;
   }
}

yc.prototype.show=function(){
    return "name: "+__name+"\n age: "+__age;
}


//yc.prototype.age=age;
yc.prototype.name=name;
module.exports=yc;

