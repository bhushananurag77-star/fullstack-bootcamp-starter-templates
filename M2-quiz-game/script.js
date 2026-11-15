const questions = [
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "None"], answer: 0 },
  { q: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
  { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: 1 },
];

function checkAnswer(question, selectedIndex) {
  return question.answer === selectedIndex;
}

function tallyScore(questions, answers) {
  return questions.reduce((score, q, i) => (checkAnswer(q, answers[i]) ? score + 1 : score), 0);
}

const answers = [0, 1, 1];
console.log(`Score: ${tallyScore(questions, answers)}/${questions.length}`);
