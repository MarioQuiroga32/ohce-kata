module.exports = (str) => {
	const userName = process.env.USER || '';
    
	if (str == str.split('').reverse().join('')) {
		return '¡Bonita palabra!';
	} else if (str === 'Stop!') {
		return `Adios ${userName}!`;
	} else {
		return str.split('').reverse().join('');
	}
};