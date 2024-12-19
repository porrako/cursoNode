var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    var query = url.parse(req.url, true);
    var filename = "." + query.pathname;

    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });
}).listen(8080);