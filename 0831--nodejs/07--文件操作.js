/**
 * Created by 张红玉 on 2016/8/31.
 */
   var http=require("http");
   var fs=require("fs");

    var server=http.createServer();

    server.on("request",function(req,res){
        if(req.url=="/"  || req.url=="/test.html"){//同步方式请求
            var data=fs.readFileSync("./test.html","utf8");
            res.write(data);
            res.end();
        }
    });
    server.listen(6669);