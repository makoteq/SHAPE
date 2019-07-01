#!/usr/bin/env node

const chalk = require('chalk');
const logSymbols = require('log-symbols');


var fs = require('fs'),
    request = require('request');
const generator = require('./generator.js');
let myArgs = process.argv.slice(2);
if (myArgs[0] == 'create') {
  var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  
  download('https://raw.githubusercontent.com/makoteq/SHAPE/master/Desktop.png', 'Desktop.png', function(){
    generator.create();
  });
} else console.log(logSymbols.success, chalk.green('Welcome in SHAPE'));
