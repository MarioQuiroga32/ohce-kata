const greeting = name => {
	const userName = name || process.env.USER || '';
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	if (name && currentHour >= 6 && currentHour <= 12) {
		return `¡Buenos días ${userName}!`;
	}
	if (name && currentHour > 12 && currentHour <= 20) {
		return `Buenas tardes ${userName}!`;
	}
	if (name && currentHour > 20 && currentHour < 6) {
		return `Buenas noches ${userName}!`;
	}
};

module.exports = { greeting };