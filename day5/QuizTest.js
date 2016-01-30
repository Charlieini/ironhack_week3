var read = require('read');
var actualQuestion;

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
	this.actualQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
	this.quized(this.actualQuestion);
}

Quiz.prototype.quized = function() {
	quiz_prompt = {
	prompt: this.actualQuestion.text
	}
	read(quiz_prompt,this.check_answer);
}

Quiz.prototype.check_answer = function (err,playerAnswer) {
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

