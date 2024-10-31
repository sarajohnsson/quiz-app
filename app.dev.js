"use strict";

var question = [{
  topic: "science",
  question: "What color is the sky?",
  possibleAnswer: ["blue", "green", "yellow"],
  correctAnswer: "blue"
}, {
  topic: "tech",
  question: "What is the best language to learn?",
  possibleAnswer: ["javascript", "python", "ruby"],
  correctAnswer: "javascript"
}, {
  topic: "nature",
  question: "What animal rules the Zavannah",
  possibleAnswer: ["lion", "rhino", "elephant"],
  correctAnswer: "lion"
}];
var quizProgress = document.getElementById("quizProgress");
var questionContainer = document.getElementById("questionContainer");
var answerContainer = document.getElementById("answerContainer");
var currentQuestionIndex = 0;

function handleQuestion(index) {
  // Handle quiz progress section
  quizProgress.innerHTML = "";
  question.forEach(function (question) {
    quizProgress.innerHTML += "<span></span>";
  });
  var spans = document.querySelectorAll("span");

  for (var i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  } // Topic and questions


  questionContainer.innerHTML = "<p>".concat(question[index].topic, "</p>\n    <p>").concat(question[index].question, "</p>\n    "); // Answer

  answerContainer.innerHTML = "";
  question[index].possibleAnswer.forEach(function (answer) {
    answerContainer.innerHTML += "<button>".concat(answer, "</button>");
  });
  var answer = document.querySelectorAll("button");
  answer.forEach(function (answer) {
    answer.addEventListener("click", function (e) {
      if (e.target.textContent === question[index].correctAnswer) {
        // Pop up for correct or wrong answer
        console.log("Correct!");
      } else {
        console.log("Wrong.");
      }

      if (currentQuestionIndex === question.length - 1) {
        currentQuestionIndex = 0;
      } else {
        currentQuestionIndex++;
      }

      handleQuestion(currentQuestionIndex);
    });
  });
}

handleQuestion(currentQuestionIndex);