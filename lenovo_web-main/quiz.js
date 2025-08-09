const questions = [
  {
    question: "What is cyberbullying?",
    options: ["A virus", "Mean behavior online", "A superhero", "An app"],
    answer: "Mean behavior online"
  },
  {
    question: "What should you do if you get a scary message?",
    options: ["Reply to it", "Ignore it", "Tell an adult", "Delete the app"],
    answer: "Tell an adult"
  },
  {
    question: "What is phishing?",
    options: ["Catching fish", "Fake messages to steal info", "Buying things online", "A video game"],
    answer: "Fake messages to steal info"
  },
  {
    question: "Which is a safe password?",
    options: ["123456", "mypassword", "qwerty", "F1shB@ll!2025"],
    answer: "F1shB@ll!2025"
  },
  {
    question: "What is malware?",
    options: ["A type of clothing", "A computer virus", "A new app", "An email company"],
    answer: "A computer virus"
  }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question');
const optionsBox = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result-box');
const scoreText = document.getElementById('score');

function loadQuestion() {
  let q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsBox.innerHTML = "";
  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  let correct = questions[currentQuestion].answer;
  if (selected === correct) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-box').style.display = 'none';
  resultBox.style.display = 'block';
  scoreText.textContent = score;
}

nextBtn.addEventListener('click', () => {
  if (currentQuestion < questions.length) {
    loadQuestion();
  }
});

loadQuestion();
