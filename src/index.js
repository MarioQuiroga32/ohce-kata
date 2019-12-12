#!/usr/bin/env node
const { greeting } = require('../lib/greetings');
const { isPalindrome } = require('../lib/isPalindrome');

const greet = (a) => {
    return greeting(a);
};

const checkPalindrome = (a) => {
    return isPalindrome(a);
}

module.exports = { greet, checkPalindrome };