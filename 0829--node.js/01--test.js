/**
 * Created by 张红玉 on 2016/8/29.
 */

//跳出多重循环
/*
outter:for( var i=1;i<10;i++){
    for ( var j=1;j<5;j++){
        if(  i*j==15){
            break outter;//跳出outter这个循环
        }
        console.info( i+"  "+j );
    }
    console.log( i+"..." );
}*/

var req={
    session:{
        users:{
            uname:"navy",
            age:"27"
        }
    }
}
//第一种
console.info( req.session.users.age );
console.info( req.session.users.uname );
console.info("\n");

//第二种
for( var attr in req.session.users ){
    console.info( "name : "+req.session.users[attr] );
}
//第三种
with( req.session.users ){
    console.info("\n"+ "name : "+uname + " \nage :"+age );
}