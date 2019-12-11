#! /usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const { greet, checkPalindrome } = require('./src');

program.version('0.0.1');

program
	.option('--word <word>')
	.option('ohce, --name <name>')
	.alias('w')
	.description('Word')
	.action(() => {
		const opts = program.opts();
		if(typeof opts.name === 'string') {
			console.log(greet(opts.name));
		} else {
			console.log(checkPalindrome(program.args[0]));
		}
	});   

    

program.parse(process.argv);