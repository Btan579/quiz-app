let imgRoot = "https://vignette.wikia.nocookie.net/memoryalpha/images/";

let currentScore = 0;

let questions = [{
    sequence: 1,
    text: "What year did Star Trek: Deep Space Nine debut?  ",
    answerChoices: ["1989", "1995", "1993", "1990"],
    correctAnswer: 2,
    imgSrc: imgRoot + "0/01/DS9_head.png/revision/latest?cb=20120220154812&path-prefix=en",
    imgAlt: "Star Trek Deep Space Nine"


  },

  {
    sequence: 2,
    text: "How many episodes did Star Trek:DS9 have in the entire series?",
    answerChoices: ["176", "182", "171", "169"],
    correctAnswer: 0,
    imgSrc: imgRoot + "5/54/Deep_space_9.jpg/revision/latest?cb=20070105230453&path-prefix=en",
    imgAlt: "depspacenine"

  },

  {
    sequence: 3,
    text: "What episode did Lieutenant Commander Worf first appear in Star Trek:DS9? ",
    answerChoices: ["133- Statistical Probabilities", "63- Visionary", "7- The Search, Part I", "74- The Way of the Warrior"],
    correctAnswer: 3,
    imgSrc: imgRoot + "1/15/WorfaboardDS9.jpg/revision/latest?cb=20061126025328&path-prefix=en",
    imgAlt: "commanderworf"

  },

  {
    sequence: 4,
    text: "What is the first episode in Star Trek: DS9 set in the mirror universe?  ",
    answerChoices: ["43- Crossover", "41- Through the Looking Glass", "40- Shattered Mirror", "73- Resurrection"],
    correctAnswer: 0,
    imgSrc: imgRoot + "6/67/Kira_and_Kira.jpg/revision/latest?cb=20050805214609&path-prefix=en",
    imgAlt: "mirrorkira"
  },

  {
    sequence: 5,
    text: "How many episodes does Grand Nagus  Zek appear in? ",
    answerChoices: ["9", "6", "3", "7"],
    correctAnswer: 0,
    imgSrc: imgRoot + "c/c6/Zek%2C_2370.jpg/revision/latest?cb=20070124015141&path-prefix=en",
    imgAlt: "naguszek"

  },

  {
    sequence: 6,
    text: "What is Garak’s first name? ",
    answerChoices: ["Damar", "Benil", "Elim", "Rugal"],
    correctAnswer: 2,
    imgSrc: imgRoot + "0/00/Elim_Garak%2C_2375.jpg/revision/latest?cb=20120329230204&path-prefix=en",
    imgAlt: "garrak"

  },

  {
    sequence: 7,
    text: "How many hosts has the symbiont Dax been joined to? ",
    answerChoices: ["9", "12", "10", "4"],
    correctAnswer: 1,
    imgSrc: imgRoot + "5/5c/Jadzia_Dax%2C_2374.jpg/revision/latest?cb=20061228060458&path-prefix=en",
    imgAlt: "dax"

  },

  {
    sequence: 8,
    text: "Which two characters in DS9 got married in real life? ",
    answerChoices: ["Julian & Kira", "Worf & Jadzia", "Quark & Ezri", "Sisko & Jadzia"],
    correctAnswer: 0,
    imgSrc: imgRoot + "f/fe/Wedding_of_Ben_Sisko%2C_Kasidy_Yates.jpg/revision/latest?cb=20060808092937&path-prefix=en",
    imgAlt: "siskowedding"

  },

  {
    sequence: 9,
    text: "Which DS9 character has had the most appearances across the Star Trek franchise? ",
    answerChoices: ["Sisko", "O-Brien", "Worf", "Picard"],
    correctAnswer: 2,
    imgSrc: imgRoot + "c/cf/Jean-Luc_Picard%2C_2370.jpg/revision/latest?cb=20120921121037&path-prefix=en",
    imgAlt: "picard"

  },

  {
    sequence: 10,
    text: "How many rules of Acquisition are there? ",
    answerChoices: ["277", "285", "292", "301"],
    correctAnswer: 1,
    imgSrc: imgRoot + "6/6f/Ferengi_Rules_of_Acquisition%2C_False_profits.jpg/revision/latest?cb=20080315104638&path-prefix=en",
    imgAlt: "rulebook"
  },
];


let currentQuestionIndex = 0;

$(function () {

  $("#quizStart").on("click", e => {
    e.preventDefault();

    //hide .start-quiz-container elements and show question-container 
    $(".start-quiz-container").addClass("hidden");


    renderQuestion(questions[currentQuestionIndex]);

  });

  $("#quizAnswers").on("submit",  answerQuestionHandler);

  $("#btnNext").on("click", e => {
    renderQuestion(questions[currentQuestionIndex]);
  });

});

function renderQuestion(question) {

  $("#btnNext").addClass("hidden");
  $('.ans').addClass("hidden");
  $("#lbQuestion").text(question.text);
  $("#answ1").text(question.answerChoices[0]);
  $("#answ2").text(question.answerChoices[1]);
  $("#answ3").text(question.answerChoices[2]);
  $("#answ4").text(question.answerChoices[3]);
  $("#questImg").attr("src", question.imgSrc).attr("alt", question.imgAlt);
  $("#questNum") == questions[currentQuestionIndex];
  $(".question-container").removeClass("hidden");
  $('.score').html("Score: " + currentScore);
  $()
  let questCount = currentQuestionIndex + 1;
  $("#quesNum").html(questCount);
  $("#quesC").html(questCount);
  $("#btnSubmitAnswer").removeClass('hidden');
  


}

function answerQuestionHandler(e) {
  e.preventDefault();
  let currentQuestion = questions[currentQuestionIndex];
  const userAnswer = parseInt($("input[name=answer]:checked").val());
  //get the value of the radio button selected and compare to questions[currentQuestionIndex].correctAnswer



  //if answer is correct add 1 to currentScore, i.e. currentScore++
  if (userAnswer === currentQuestion.correctAnswer) {

    currentScore++;
  }
 
  
  //remove hidden class from correct answer info
  $('.ans').removeClass("hidden");
  $('#quesAns').html(currentQuestion.answerChoices[currentQuestion.correctAnswer]);
  

  //remove hidden class from btnNext to allow advance to next question
  $("#btnNext").removeClass("hidden");

  //also increase currentQuestionIndex to show next question, currentQuestionIndex++
  currentQuestionIndex++;


  $("#btnSubmitAnswer").addClass('hidden');
  $("btnSubmitAnswer").prop("disabled", true);
  $('input[name="answer"]').prop('checked', false);
  

  checkFinalResults()
}


  
function checkFinalResults() {

  if (currentQuestionIndex >= questions.length) {
    $(".question-container").addClass('hidden');
    $("#results").removeClass('hidden');
    $("#quizScore").html(currentScore.toString())

  }

  $("#newStart").on("click", resetQuiz);
}


function resetQuiz() {

  $("#results").addClass('hidden');
  $(".start-quiz-container").removeClass('hidden');
  currentScore = 0;
  currentQuestionIndex = 0;
}