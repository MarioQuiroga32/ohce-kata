#! /usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const { greet } = require('./src');
const { isEmpty, listening, checkIfNameIsProvide } = require('./utils');
const readline = require('./utils/readline');

program.version('0.0.1');

program
  .option('<name>')
  .alias('w')
  .description('Word')
  .action(() => {
    const name = program.args[0];

    checkIfNameIsProvide(name);

    console.log(greet(name));

    listening(name, readline);
  });

program.parse(process.argv);
