var http = require('http');
var url = require('url');
var fs = require('fs');
/*
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      fs.readFile('./404.html', function(err2, data2) {
        if(err2){
            console.log("something went wrong");
            return res.end('Internal error!');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data2);
        return res.end();
      });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    } 
    
  });
}).listen(8080); 
*/

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 