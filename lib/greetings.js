const greeting = (name, currentHour) => {	
	if (name && currentHour >= 6 && currentHour <= 12) {		
		return `¡Buenos días ${name}!`;
	}
	if (name && currentHour > 12 && currentHour <= 20) {
		return `¡Buenas tardes ${name}!`;
	}
	if (name && currentHour > 20 || currentHour < 6) {
		return `¡Buenas noches ${name}!`;
	}
};

module.exports = { greeting };