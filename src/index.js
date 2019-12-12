#!/usr/bin/env node
const { greeting } = require('../lib/greetings');
const { isPalindrome } = require('../lib/isPalindrome');

const greet = a =>  {
    const userName = name || process.env.USER || '';
	const currentDate = new Date();
	const currentHour = currentDate.getHours();
    
    greeting(a, currentHour)
};

const checkPalindrome = a => isPalindrome(a)

module.exports = { greet, checkPalindrome };