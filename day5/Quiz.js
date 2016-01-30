var read = require('read');
var fs = require('fs');
var randomIndex;
var actualQuestion;
var totalScore = 0;

var Quiz = function (player,questions) {
	this.player = player;
	this.questions = questions;
	randomQuiz(questions);

	function randomQuiz (questions) {

		randomIndex = Math.floor(Math.random() * questions.length)
		actualQuestion = questions[randomIndex];
		questions.splice(randomIndex,1)
		actualQuestion.bonus = Math.floor(Math.random() * questions.length);
		quiz(actualQuestion);
	}

	function quiz (question) {
		if (actualQuestion.bonus > 0) {
			console.log("Bonus Question!");
			actualQuestion.point = actualQuestion.point * 2;
		}

		quiz_prompt = {
		prompt: question.text
		}
		read(quiz_prompt,check_answer);
	}

	function check_answer (err,answer) {


		if (answer === actualQuestion.answer) {
			console.log("great");
			totalScore += actualQuestion.point;
			randomQuiz(questions);
		}
		else if (answer === "exit") {
			console.log( "  total score " + totalScore );
		}
		else {
			console.log("Meck!!");
			totalScore -= actualQuestion.point;
			randomQuiz(questions);
		}
	}
}

var Question = function (text,answer,ID) {
	this.text = text;
	this.answer = answer;
	this.ID = ID;
	this.point = 1;
	this.bonus = 0;
}

var Player = function (name) {
	this.name = name;
	this.currentScore = 0;
	this.questionNumber = 0;

}




var q1 = new Question ("si?","si");
var q2 = new Question ("no?","no");
var q3 = new Question ("Maybe?","Maybe");
var questions = [q1,q2,q3];


var charlie = new Player("Charlie");
var aQuiz = new Quiz(charlie,questions);


