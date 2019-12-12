#! /usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const { greet, checkPalindrome } = require('./src');

program.version('0.0.1');

program
	.option('<name>')
	.alias('w')
	.description('Word')
	.action(() => {
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout
		})
		
		function palindrome(string) {
			console.log(checkPalindrome(string));
			question()
		}

		function close(string) {
			palindrome(string)
			readline.close()
		}

		function question() {
			readline.question(``, (string) => {
				string === 'Stop!' ? palindrome(string) : close(string)
			})
		}

		const name = program.args[0]
		
		if(name !== '') {
			console.log(greet(name));
			question()
		}
	});   

    

program.parse(process.argv);