#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
var http = require('http');
var mkdirp = require('mkdirp');
const readline = require('readline');
const logSymbols = require('log-symbols');

const generator = require('./generator.js');
let myArgs = process.argv.slice(2);
if (myArgs[0] == 'create') {
  generator.create();
}else console.log(logSymbols.success,chalk.green('Welcome in SHAPE'));


/*function createServer() {
  http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('Hello World!');
  }).listen(3000);
}*/
