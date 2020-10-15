// // 
var questions = [
    {
        question: "What genre?",
        options: [
            "Commedy",
            "Horror",
            "Action"
        ],
        answerKey: "genrePick"
    }
]

var answers = {}

$(".option-button").click(function(){
    // put the answer into the answers object
    answers[questions[currentQuestionIndex].answerKey] = $(this).attr("data-answer");
    // answers.genrePick = "comedy"
    // go to the next question
    currentQuestionIndex++
})


console.log(answers.genrePick);


$(element).attr("data-answer", someValueVar)
var answer = $(element).attr("data-answer");