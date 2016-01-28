var Viking = function (name,health,strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
}

var Saxon = function (health,strength) {
	this.health = parseInt(Math.random()*50)+1;
	this.strength = parseInt(Math.random()*10);
}


Viking.prototype.fight = function() {
	return parseInt(this.strength * Math.random());
}


function arenaFight (viking1,viking2) {

	var rounds = parseInt(Math.random()*10)+1;

	for (i = 0; i<rounds; i++) {
		if (viking1.health > 60 && viking2.health > 60) {
			viking2.health -= viking1.fight();
			viking1.health -= viking2.fight();	
		}
		else {
			console.log("Stop the fight!")
		}
	}
	console.log(viking1.health);
	console.log(viking2.health);
}

function groupOfSaxons() {
	village = []
	number = parseInt(Math.random()*10)+1;
	for (var i = 0; i<number; i++) {
		village.push(new Saxon);
	}
	return village;
}

function calculateForce(band) {

	healths = band.map(function(a){
		return a.health;
	});

	total = healths.reduce(function(a,b){
		return a+b;
	});
	return total;
}

function assault (vikings,saxons) {
	console.log("Vikings: WAAAARRR!!!!");
	console.log("Saxons:  RUUNNNNN");

	var vikingBand = vikings
	var saxonsBand = saxons

	var vikingForce = calculateForce(vikingBand);
	var saxonsForce = calculateForce(saxonsBand);
	console.log(saxonsForce);
	console.log(saxons);

 	var turns = Math.floor(Math.random() * 4) + 5;

 	vikingBand.forEach(function(viking,index){
 		var randomIndex = Math.floor(Math.random() * saxons.length);
 		saxonsBand[randomIndex].health -= viking.fight();
 		console.log(saxons[randomIndex].health)
 		if (saxonsBand[randomIndex].health <= 0) {
 			saxonsBand.splice(index,randomIndex);
 		}
 	});
 	console.log(saxonsBand);
 	var saxonsForceWounded = calculateForce(saxonsBand);
 	console.log(saxonsForceWounded);

}

var erik = new Viking("Erik",100,20);
var olaf = new Viking("Olaf",250,10);
var baelog = new Viking("Baelog",150,16)

var bandOfSaxons = groupOfSaxons();
var vikingBand = [erik,olaf,baelog];

console.log(vikingBand);

assault(vikingBand,bandOfSaxons);



