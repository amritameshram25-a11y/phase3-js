let questions = [
    {
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Which is a JavaScript keyword?",
        options: ["var", "apple", "mango", "banana"],
        answer: "var"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    }
    
];

 let currentQuestion = 0;
 let score = 0;

 function startQuiz() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "Block";
    loadQuestion();

}

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let optionsHTML = "";
    q.options.forEach(function(option) {
        optionsHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";
    document.getElementById("resultText").innerText =
        "You got " + score + " out of " + questions.length + " correct!";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}