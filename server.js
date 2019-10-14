//思路：1.获取路由，根据路由中的pathname判断路由，
//2.若是css和js是外部链接，需要获取文件路径，判断文件路径是否存在，若存在则读取文件路由

var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

var server = http.createServer(function (req, res) {
    var realurl = "http://" + req.headers.host + req.url; //获取完整的路由

    var Objurl = url.parse(realurl); //将路由转化成对象
    switch (Objurl.pathname) { 

        case "/":
            fs.readFile("./index/index.html", "utf8", function (err, data) {//如果载入的静态页面中的css和js是使用外部链接的，则相当于请求了两次服务器
                if (err) throw err;
                res.end(data);
            })
            break;
        case "/js/jQuery.js":
            fs.readFile("./index/js/jQuery.js", "utf8", function (err, data) {
                if (err) throw err;
                res.end(data);
            })
            break;
        
        case "/js/index.js":
            fs.readFile("./index/js/index.js", "utf8", function (err, data) {
                if (err) throw err;
                res.end(data);
            })
            break;


        case "/css/index.css":
            fs.readFile("./index/css/index.css", "utf8", function (err, data) {
                if (err) throw err;
                res.end(data);
            })
            break;
        default:
            switch(Objurl.pathname.split("/")[2].split(".")[1]){
              case "jpg":
                  res.setHeader("Content-Type", "image/jpeg");
                  //格式必须为 binary 否则会出错
                  var content =  fs.readFileSync("./index/img/"+Objurl.pathname.split("/")[2],"binary");   
                  res.writeHead(200, "Ok");
                  res.write(content,"binary"); //格式必须为 binary，否则会出错
                  res.end();
                  return
              case "svg":
                  res.setHeader("Content-Type", "image/svg+xml");
                  //格式必须为 binary 否则会出错
                  var content =  fs.readFileSync("./index/img/"+Objurl.pathname.split("/")[2],"binary");   
                  res.writeHead(200, "Ok");
                  res.write(content,"binary"); //格式必须为 binary，否则会出错
                  res.end();
                  return
              case "gif":
                  res.setHeader("Content-Type", "image/gif");
                  //格式必须为 binary 否则会出错
                  var content =  fs.readFileSync("./index/img/"+Objurl.pathname.split("/")[2],"binary");   
                  res.writeHead(200, "Ok");
                  res.write(content,"binary"); //格式必须为 binary，否则会出错
                  res.end();
                  return 
              }
          //   console.log(Objurl.pathname.split("/")[2])
          //   fs.readFile("./index/img/"+Objurl.pathname.split("/")[2], "utf8", function (err, data) {
          //     if (err) throw err;
          //     res.end(data);
          // })
            // var filename = path.join(__dirname, Objurl.pathname) //获取文件完整路由
            // if (fs.existsSync(filename)) {
            //     fs.readFile(filename, function (err, data) {
            //         if (err) throw err;
            //         res.end(data);
            //     })
            // } else {
            //     res.end();
            // }
            // break;
    }
});
server.listen(3000);
