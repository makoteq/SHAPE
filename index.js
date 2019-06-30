#!/usr/bin/env node
let text = require('./indexmodule.js')
const fs = require('fs');
const chalk =require('chalk');
var http = require('http');
var mkdirp = require('mkdirp');
const readline = require('readline');
let name = 'maciek';
let description = 'elo 320'
let isfacebook = 'none';
let facebooklink = 'https://www.facebook.com/';
let isinstagram = 'none';
let instagramlink = 'https://www.instagram.com/';
let isgithub = 'none';
let githublink = 'https://github.com/';
let myArgs = process.argv.slice(2);
if(myArgs[0]=='create'){
    create();
}
function create(){
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.green('Please enter your name: '), (answer1) => {
  rl.question(chalk.magenta('Please type something about you : '), (answer2) => {
    rl.question(chalk('Do you want add Facebook? [if yes then write link to your account!]\n-'), (isFb) => {
      if (isFb != '') {
        isfacebook='';
        facebooklink = isFb;
      }

      rl.question(chalk.green('Do you want add Instagram? [if yes then write link to your account!]\n-'), (isIg) => {
        if (isIg != '') {
          isinstagram='';
          instagramlink = isIg;
        }
        rl.question(chalk.magenta('Do you want add Github? [if yes then write link to your account!]\n-'), (isGit) => {
          if (isGit != '') {
            isgithub='';
            githublink = isGit;
          }
        name = answer1;
        description = answer2;
        copy();
        rl.close();
      });
      });
    });
  });
});


function copy() {
  mkdirp('./portfolia/' + name + ' portfolio', function (err) {
    if (err) console.error(err)
    else {
      fs.writeFile('./portfolia/' + name + ' portfolio/index.html', text.site(name, description, isfacebook, facebooklink, isinstagram, instagramlink, isgithub, githublink),
        function (err) {
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
}

/*function createServer() {
  http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('Hello World!');
  }).listen(3000);
}*/
