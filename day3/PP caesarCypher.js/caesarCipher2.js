var abcd = ("abcdefghijklmnopqrstuvwxyz").split('');
var position;

function caesarCipher(message) {
	splittedMessage = message.split('');

	result = splittedMessage.map(function (word,index) {
		position = abcd.find(splittedMessage[index])
		}
	); return result;
}

caesarCipher("brutus")