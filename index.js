#!/usr/bin/env node
let text = require('./indexmodule.js')
const fs = require('fs');
var http = require('http');
var mkdirp = require('mkdirp');
const readline = require('readline');
let name = 'maciek';
let description = 'elo 320'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (answer1) => {
  rl.question('Please type something about you : ', (answer2) => {
     name=answer1;
     description=answer2;
     copy();
      rl.close();
  });
});
function copy(){
mkdirp('./portfolia/' + name + ' portfolio', function (err) {
  if (err) console.error(err)
  else {
    console.log('pow!')
    fs.writeFile('./portfolia/' + name + ' portfolio/index.html', text.site(name,description), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    fs.copyFile('./Desktop.png', './portfolia/' + name + ' portfolio/Desktop.png', (err) => {
      if (err) throw err;
    });
    fs.copyFile('./demo/main.css', './portfolia/' + name + ' portfolio/main.css', (err) => {
      if (err) throw err;
    });
  }
});

}
function createServer() {
  http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('Hello World!');
  }).listen(3000);
}
