/**
 * Created by Administrator on 16-9-30.
 */
function check(obj){
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;//邮箱验证正则式
    if(reg.test($(obj).val())){
        $(obj).css("border-color","green");//如果验证成功则变成绿色
        return true;
    }else{
        $(obj).css("border-color","red");//如果验证失败则变成红色
        return false;
    }

}
function getemail(){
    $("#getemails").attr("disabled",true);//点击获取之后按钮应禁用，防止重复发送
    if(check($("#eml"))){
        var eml= $.trim($("#eml").val());
        $.post("/getlma",{eml:eml},function(data){
            data= $.trim(data);
            if(data=="2"){
                $("#getemails").val("邮件发送成功，点击重新获取").attr("disabled",false);
            }else{
                $("#getemails").val("邮件发送失败，点击再次发送").attr("disabled",false);
            }
        },"text");
    }else{
        return;
    }
}
function checkInfo(){
    var sname= $.trim($("#sname").val());
    var pwd= $.trim($("#pwd").val());
    var sex= $.trim($("#input:radio").val());
    var age= $.trim($("#age").val());
    var eml= $.trim($("#eml").val());
    var elma=$.trim($("#elma").val());

    $.post("/adduser",{sname:sname,pwd:pwd,sex:sex,age:age,eml:eml,elma:elma},function(data){
        data= $.trim(data);
        if(data=="5") {
            alert("注册成功。。。");
        }else{
            alert("注册不成功");
        }

    },"text");



}