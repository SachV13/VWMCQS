const questions = [
  {
    q: "What defines a virtual world?",
    options: [
      "Persistent shared env",
      "Single user offline",
      "Static digital system",
      "Temporary session only"
    ],
    answer: 0
  }
];

function normalizeOptions(options) {
  const maxLength = Math.max(...options.map(o => o.length));
  return options.map(o => o.padEnd(maxLength, ' '));
}

function shuffleOptions(options) {
  return options.sort(() => Math.random() - 0.5);
}

function startTest() {
  document.body.innerHTML = '<div class="question-container" id="quiz"></div>';
  loadQuestion();
}

function loadQuestion() {
  const q = questions[0];
  let options = normalizeOptions(q.options);
  options = shuffleOptions(options);

  let html = `<h2>${q.q}</h2>`;

  options.forEach((opt) => {
    html += `<button class="option" onclick="checkAnswer('${opt.trim()}')">${opt}</button>`;
  });

  document.getElementById('quiz').innerHTML = html;
}

function checkAnswer(selected) {
  const correct = questions[0].options[questions[0].answer];
  alert(selected === correct ? 'Correct' : 'Wrong');
}

function openGlossary() {
  document.body.innerHTML = `
    <div class="container">
      <h1>Glossary & Key Points</h1>
      <p><b>Virtual World:</b> Persistent digital environment shared by users.</p>
      <p><b>Persistence:</b> World continues even when users log off.</p>
      <p><b>Avatar:</b> Digital representation of a user.</p>
      <button onclick="location.reload()">Back</button>
    </div>
  `;
}
