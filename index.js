#! /usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const { greet } = require('./src');
const { palindrome, isEmpty, listening } = require('./utils');

program.version('0.0.1');

program
  .option('<name>')
  .alias('w')
  .description('Word')
  .action(() => {
    const name = program.args[0];

    if (!isEmpty(name)) {
      console.log(greet(name));
      listening(name);
    } else {
      console.log('Insert your name');
    }
  });

program.parse(process.argv);
