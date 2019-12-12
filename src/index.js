#!/usr/bin/env node
const { greeting } = require('../lib/greetings');
const { isPalindrome } = require('../lib/isPalindrome');

const greet = name =>  {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();
    
    return greeting(name, currentHour)
};

const checkPalindrome = word => isPalindrome(word)

module.exports = { greet, checkPalindrome };