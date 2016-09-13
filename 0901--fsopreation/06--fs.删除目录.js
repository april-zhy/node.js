/**
 * Created by 张红玉 on 2016/9/1.
 */
var fs=require("fs");
/*文件的移动和删除   fs.rename( oldpath,newpath,callback(err) );
 * 注意：oldpath:原先的路径及名
 * newpath:移动之后的路径及名
  * */
/*fs.rename("./yc.txt","./test/yc.txt",function(err){
    if (err){
        console.info(err);
        console.info("文件移动失败");
    }else {
        console.info("文件移动成功");
    }
});*/

//目录的删除  只能删除空的文件夹
fs.rmdir( "./test002",function(err){
    if (err){
        console.info("出错啦");
    }else {
        console.info("目录删除成功");
    }
} );

//文件的删除