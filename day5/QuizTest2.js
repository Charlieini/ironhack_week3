var prompt = require('prompt');
var actualQuestion;
var playerAnswer;

var Question = function (text,answer,ID) {
	this.text = text;
	this.answer = answer;
	this.ID = ID;
	this.point = 1;
}

var Quiz = function (questions) {
	this.questions = questions;
	this.actualQuestion;
	this.totalScore = 0;

}


Quiz.prototype.randomQuiz = function() {
	playerAnswer = "";
	this.actualQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
	this.quized(this.actualQuestion);
	this.check_answer(playerAnswer);
}

Quiz.prototype.quized = function() {
	prompt.start();	

		console.log(this.actualQuestion.text);
			
	    prompt.get(['playerAnswer'], function (err, result) {
	playerAnswer = result.playerAnswer;
  });
}

Quiz.prototype.check_answer = function (playerAnswer) {
	console.log(this)
	if (playerAnswer === this.actualQuestion.answer) {
		console.log("great");
		this.randomQuiz();
	}
	else if (answer === "exit") {
		console.log(this.totalScore);
	}
	else {
		console.log("Meck!!");
		this.randomQuiz();
	}
}


var q1 = new Question ("si?","si");
var q2 = new Question ("no?","no");
var q3 = new Question ("Maybe?","Maybe");
var questions = [q1,q2,q3];

var aQuiz = new Quiz(questions);
aQuiz.randomQuiz();

