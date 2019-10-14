

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const server = http.createServer();

server.listen(8080,function(){
  console.log("8080")
})

server.on("request",function(req,res){
  var urls = url.parse(req.url,true);
  if(urls.pathname == "/" | urls.pathname == ""){
    fs.readFile("./index/index.html",function(err,data){
      if(!err){
        res.end(data)
      }else{
        console.log(err)
      }
    })
  }else{
    switch(path.extname(urls.pathname)){
      case ".css":
          res.readFile("./index/css/css.js");
          console.log(urls.pathname.split()[-1])
          break;
      case ".gif":
          res.readFile("./index/img/css.js");
          break;
      case ".jpg":
          res.readFile("./index/css/css.js");
          break;
      case ".png":
          console.log(urls.pathname.split()[-1]);
          break;
      case ".svg":
          console.log(urls.pathname.split()[-1]);
          break;
      default:
          console.log(urls.pathname.split()[-1])
  }
  }
})