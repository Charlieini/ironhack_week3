var cojoCypher = require('./cojoCypher.js');


var encrypted = cojoCypher("Cabayo Blanco, cabayo negro!!", -5, 'cypher');
console.log(encrypted);

var encrypted = cojoCypher("Xvwvtj Wgvixj, xvwvtj izbmj!!", -5, 'decypher');
console.log(encrypted);