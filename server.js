

const http = require("http");
var fs = require('fs');
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
    fs.readFile("./index"+urls.pathname,function(err,data){
      if(!err){
        res.end(data)
      }else{
        console.log(err)
      }

    })
  }
})