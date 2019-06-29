#!/usr/bin/env node
const fs = require('fs');
let name ='maciek';
let html = "<!DOCTYPE html>\
<html>\
<title>This site belongs to"+name+"</title>\
<body>\
<h1>This is a heading</h1>\
<p>This is a paragraph.</p>\
</body>\
</html>";
var http = require('http');
var mkdirp = require('mkdirp');
mkdirp('./'+name+' portfolio', function (err) {
    if (err) console.error(err)
    else{ console.log('pow!')
    fs.writeFile('./'+name+' portfolio/mynewfile1.html', html, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }
});

/* destination.txt will be created or overwritten by default.
fs.copyFile('maciek portfolio/mynewfile1.html', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});*/
function createServer(){
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Hello World!');
    }).listen(3000);
    }