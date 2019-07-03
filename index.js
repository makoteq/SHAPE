#!/usr/bin/env node

const chalk = require('chalk');
const logSymbols = require('log-symbols');
const generator = require('./generator.js');
let myArgs = process.argv.slice(2);
if (myArgs[0] == 'create') {
    generator.create();
} else console.log(logSymbols.success, chalk.green('Welcome in SHAPE'));
