var caesarCipher = require('./caesarCipher.js');

function cojoCypher (message, shift, task) {
	var result = ''

	var real_shift = 0;

	if (task === 'decypher') {
		real_shift = 0 - shift;
	}

	else if (task === 'cypher') {
		real_shift = shift;
	}

	else {
		console.log('Ojete!');
	}

	result = caesarCipher(message, real_shift);
	return result;
}

module.exports = cojoCypher;