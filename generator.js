module.exports = {
  create: function () {
    const fs = require('fs');
    const chalk = require('chalk');
    var http = require('http');
    var mkdirp = require('mkdirp');
    const readline = require('readline');
    const logSymbols = require('log-symbols');
    let theme='white';
    let themeColor ='black'
    let text = require('./indexmodule.js')
    let name = 'maciek';
    let description = ''
    let isfacebook = 'none';
    let facebooklink = 'https://www.facebook.com/';
    let isinstagram = 'none';
    let instagramlink = 'https://www.instagram.com/';
    let isgithub = 'none';
    let githublink = 'https://github.com/';
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(chalk.green(logSymbols.warning,'Please enter your name: '), (answer1) => {
      rl.question(chalk.green('Please type something about you : '), (answer2) => {
       rl.question(chalk.magenta('Select theme, type <dark> or <white>'), (answer3) => {
        rl.question(chalk.green(logSymbols.warning,'Do you want add Facebook? [if yes then write link to your account!]\n-'), (isFb) => {
          if (isFb != '') {
            isfacebook = '';
            facebooklink = isFb;
          }

          rl.question(chalk.magenta(logSymbols.warning,'Do you want add Instagram? [if yes then write link to your account!]\n-'), (isIg) => {
            if (isIg != '') {
              isinstagram = '';
              instagramlink = isIg;
            }
            rl.question(chalk.green(logSymbols.warning,'Do you want add Github? [if yes then write link to your account!]\n-'), (isGit) => {
              if (isGit != '') {
                isgithub = '';
                githublink = isGit;
              }
              name = answer1;
              description = answer2;
         switch(answer3){
            case 'white':
              theme='white'
              themeColor='black';
              break;
            case 'dark':
              theme='black'
              themeColor='white';
              break;
            default:
              theme='white'
         }
              copy();
              rl.close();
            });
          });
          });
        });
      });
    });
    /*
    function downloadImg(){
      var download = function(uri, filename, callback){
        request.head(uri, function(err, res, body){
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
      
      download('https://raw.githubusercontent.com/makoteq/SHAPE/master/Desktop.png', 'Desktop.png', function(){
      });
    }
*/
    function copy() {
      mkdirp('./' + name + ' portfolio', function (err) {
        if (err) console.error(err)
        else {
          fs.writeFile('./' + name + ' portfolio/index.html', text.site(name, description,theme,themeColor, isfacebook, facebooklink, isinstagram, instagramlink, isgithub, githublink),
            function (err) {
              if (err) throw err;
              console.log(theme);
              console.log(logSymbols.success,'Saved! Your site has been saved in'+chalk.magenta(' '+name+' portfolio')+' directory  ( ͡° ͜ʖ ͡°)');
            });
         /* fs.copyFile('./Desktop.png', name + ' portfolio/Desktop.png', (err) => {
            if (err) throw err;
          });*/
        }
      });

    }
  }
  }
