const question = [
    {
        topic: "science",
        question: "What color is the sky?",
        possibleAnswer: ["blue", "green", "yellow"],
        correctAnswer: "blue",
    },
    {
        topic: "tech",
        question: "What is the best language to learn?",
        possibleAnswer: ["javascript", "python", "ruby"],
        correctAnswer: "javascript",
    },
    {
        topic: "nature",
        question: "What animal rules the Zavannah",
        possibleAnswer: ["lion", "rhino", "elephant"],
        correctAnswer: "lion",
    },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionIndex = 0;

function handleQuestion(index) {
    // Handle quiz progress section
    quizProgress.innerHTML = "";
    question.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });

    let spans = document.querySelectorAll("span");
    for (let i = 0; i <= index; i++) {
        spans[i].classList.add("seen");
    }

    // Topic and questions
    questionContainer.innerHTML = `<p>${question[index].topic}</p>
    <p>${question[index].question}</p>
    `;

    // Answer
    answerContainer.innerHTML = "";
    question[index].possibleAnswer.forEach((answer) => {
        answerContainer.innerHTML += `<button>${answer}</button>`;
    });

    let answer = document.querySelectorAll("button");
    answer.forEach((answer) => {
        answer.addEventListener("click", (e) => {
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
