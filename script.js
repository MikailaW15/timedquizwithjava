function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
$(":button").find(".start").css( "background-color", "red" )

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var questions = output = [];
        var answers;
        for (var i = 0; i < questions.length; i++){
            answers = [];
            for (letter in question[i].answers){
                
    answers.push(

                    '<label>'
                    + '<input type="radio" name="question" +i+ value="'+letter+'">'
                    + letter + ': '
                    + question[i].answer[letter]
                    + '</label>'
                );
            }
        }
	}

	function showResults(questions, quizContainer, resultsContainer){
        console.log()
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var start = startButton.addEventListener("click", function() {
    displayQuestion();
 })

var myQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: {
			a: 'strings',
			b: 'booleans',
			c: 'alerts',
            d: 'numbers'
		},
		correctAnswer: 'b'
	},
	{
		question: "Arrays in Javascript can be used to store:",
		answers: {
			a: 'numbers and strings',
			b: 'other arrays',
			c: 'booleans',
            d: 'all of the above'
		},
		correctAnswer: 'c'
	},
    {
        question: "Who invented Jquery?",
        answers: {
            a: 'John Isenburg',
            b: 'John Resig',
            c: 'John Wick',
            d: 'Jerry Fisher'
        },
        correctAnswer: 'b'
    }
];

document.append("myQuestions")

function displayQuestion() {
    questionContainer.innerHTML = myQuestions[0].question
    var answer1 = document.getElementById('answer1')
    var answer2 = document.getElementById('answer2')
    var answer3 = document.getElementById('answer3')
    answer1.innerHTML = myQuestions[0].answers.b
    answer2.innerHTML = myQuestions[0].answers.c
    answer3.innerHTML = myQuestions[0].answers.b
    }
    $(".hide").hide("#quizContainer")