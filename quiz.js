const questions = [
  {
      question: "¿Cuál es la regla del 50/30/20?",
      choices: [
          "50% necesidades, 30% deseos, 20% ahorro",
          "50% ahorro, 30% inversiones, 20% gastos",
          "50% gastos, 30% ahorro, 20% deseos",
          "50% deseos, 30% necesidades, 20% ahorro"
      ],
      answer: 0
  },
  {
      question: "¿Qué es un fondo de emergencia?",
      choices: [
          "Dinero para gastar en vacaciones",
          "Ahorros para gastos inesperados",
          "Inversiones en la bolsa",
          "Gastos mensuales"
      ],
      answer: 1
  },
  // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-container").innerText = currentQuestion.question;

  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = ""; // Limpiar las opciones anteriores

  currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.classList.add("btn", "waves-effect", "waves-light");
      button.onclick = () => selectAnswer(index);
      choicesContainer.appendChild(button);
  });
}

function selectAnswer(index) {
  if (index === questions[currentQuestionIndex].answer) {
      score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hide");
  const resultContainer = document.getElementById("result-container");
  resultContainer.classList.remove("hide");
  document.getElementById("score").innerText = `Has acertado ${score} de ${questions.length} preguntas.`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").classList.add("hide");
  document.getElementById("quiz-container").classList.remove("hide");
  showQuestion();
}

// Iniciar el quiz mostrando la primera pregunta
showQuestion();
