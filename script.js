const funFacts = [
  "I say 'I'm fine' when I'm clearly not 😌",
  "I reply fast… then disappear for 3 hours 😭",
  "I act serious but laugh at the dumbest jokes",
  "I google things I already know just to confirm",
  "I overthink everything… even this website 💀"
];

function showFact() {
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById("fact").innerText = fact;
}

// QUIZ
const quiz = [
  {
    q: "What do I do when I’m hungry?",
    options: ["Cook", "Sleep", "Complain", "Order food"],
    answer: "Complain"
  },
  {
    q: "My biggest weakness?",
    options: ["Food", "Sleep", "Her smile", "All of the above"],
    answer: "All of the above"
  }
];

let current = 0;

function loadQuiz() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(opt) {
  const result = document.getElementById("result");
  if (opt === quiz[current].answer) {
    result.innerText = "Correct 😏 You know me too well!";
  } else {
    result.innerText = "Wrong 😂 But I forgive you";
  }
  current = (current + 1) % quiz.length;
  setTimeout(loadQuiz, 1500);
}

loadQuiz();

function surprise() {
  document.getElementById("surpriseText").innerText =
    "You just unlocked my personality: 50% chaos, 50% love 💖🔥";
    }
