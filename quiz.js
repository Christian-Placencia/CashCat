const quizData = [
    {
      question: "¿Qué es un presupuesto?",
      options: [
        "Una herramienta para gastar más",
        "Un plan para ahorrar dinero",
        "Una cuenta de banco especial",
        "Un préstamo a largo plazo"
      ],
      correct: 1
    },
    {
      question: "¿Qué es el interés compuesto?",
      options: [
        "Interés que pagas una sola vez",
        "Interés sobre el capital inicial y acumulado",
        "Interés que no cambia",
        "Un tipo de impuesto"
      ],
      correct: 1
    },
    {
      question: "¿Qué significa diversificar tus inversiones?",
      options: [
        "Invertir todo en una sola acción",
        "Distribuir el dinero en diferentes activos",
        "Invertir en el banco",
        "Guardar todo el dinero en efectivo"
      ],
      correct: 1
    },
    // Agrega más preguntas según sea necesario
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const choicesContainer = document.getElementById('choices-container');
  const nextBtn = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreDisplay = document.getElementById('score');
  
  function loadQuestion() {
    questionContainer.textContent = quizData[currentQuestion].question;
    choicesContainer.innerHTML = '';
    
    quizData[currentQuestion].options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('col', 's12', 'm6');
      optionElement.innerHTML = `
        <button class="btn-large waves-effect waves-light" onclick="selectAnswer(${index})">${option}</button>
      `;
      choicesContainer.appendChild(optionElement);
    });
  }
  
  function selectAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
      score++;
    }
    nextBtn.classList.remove('hide');
  }
  
  function nextQuestion() {
    currentQuestion++;
    nextBtn.classList.add('hide');
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById('quiz-container').classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreDisplay.textContent = `${score} / ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.classList.add('hide');
    document.getElementById('quiz-container').classList.remove('hide');
    loadQuestion();
  }
  
  loadQuestion();
  