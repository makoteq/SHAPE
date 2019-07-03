module.exports = {
  create: function () {
    const fs = require('fs');
    const chalk = require('chalk');
    const mkdirp = require('mkdirp');
    const readline = require('readline');
    const logSymbols = require('log-symbols');


    let text = require('./indexmodule.js')
    let name = 'maciek';
    let description = ''
    let isfacebook = 'none';
    let facebooklink = 'https://www.facebook.com/';
    let isinstagram = 'none';
    let instagramlink = 'https://www.instagram.com/';
    let isgithub = 'none';
    let githublink = 'https://github.com/';

    var download = require('./downloadmodule');
    function down(){
      console.log(logSymbols.success,chalk.green('downloading images...'));
    download("https://raw.githubusercontent.com/makoteq/SHAPE/master/Desktop.png", "./"+name+" portfolio/Desktop.png", function (state) {
          }, function (response) {
            
          }, function (error) {
              console.log(logSymbols.error,chalk.red("Check your internet connnection"));
          }, function (end) {
            console.log(logSymbols.success,chalk.green('success'));
          });
        }


    function copy() {
      mkdirp('./' + name + ' portfolio', function (err) {
        if (err) console.error(err)
        else {
          fs.writeFile('./' + name + ' portfolio/index.html', text.site(name, description, isfacebook, facebooklink, isinstagram, instagramlink, isgithub, githublink),
            function (err) {
              if (err) throw err;
              console.log(logSymbols.success, 'Saved! Your site has been saved in' + chalk.magenta(' ' + name + ' portfolio') + ' directory  ( ͡° ͜ʖ ͡°)');
            });
        }
      });

    }






    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(chalk.green(logSymbols.warning, 'Please enter your name: '), (answer1) => {
      rl.question(chalk.green(logSymbols.warning,'Please write something about you : '), (answer2) => {
        rl.question(chalk.green(logSymbols.warning, 'Do you want add Facebook? [if yes then write link to your account!]\n-'), (isFb) => {
          if (isFb != '') {
            isfacebook = '';
            facebooklink = isFb;
          }

          rl.question(chalk.magenta(logSymbols.warning, 'Do you want add Instagram? [if yes then write link to your account!]\n-'), (isIg) => {
            if (isIg != '') {
              isinstagram = '';
              instagramlink = isIg;
            }
            rl.question(chalk.green(logSymbols.warning, 'Do you want add Github? [if yes then write link to your account!]\n-'), (isGit) => {
              if (isGit != '') {
                isgithub = '';
                githublink = isGit;
              }
              name = answer1;
              description = answer2;
            
              copy();
              down();
              rl.close();
            });
          });
        });
      });
    });
  }
}
