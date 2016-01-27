function caesarCipher(message, shift) {

	shift = shift || -3;

	cipheredMessage = '';

	for (var i = 0; i < message.length; i++) {
		var codeChanquete = message.charCodeAt(i);

		if (codeChanquete >= 65 && codeChanquete <= 90) {

			if (codeChanquete + shift < 65) {
				cipheredMessage += String.fromCharCode(codeChanquete + shift + 26);
			}
			else if (codeChanquete + shift > 90) {
				cipheredMessage += String.fromCharCode(codeChanquete + shift - 26);
			}
			else {
				cipheredMessage += String.fromCharCode(codeChanquete + shift);
			}
			
		}

		else if (codeChanquete >= 97 && codeChanquete <= 122) {

			if (codeChanquete + shift < 97) {
				cipheredMessage += String.fromCharCode(codeChanquete + shift + 26);
			}
			else if (codeChanquete + shift > 122) {
				cipheredMessage += String.fromCharCode(codeChanquete + shift - 26);
			}
			else {
				cipheredMessage += String.fromCharCode(codeChanquete + shift);
			}
			
		}

		else {
			cipheredMessage += String.fromCharCode(codeChanquete);
		}
		
	}

	return cipheredMessage;
}


module.exports = caesarCipher;