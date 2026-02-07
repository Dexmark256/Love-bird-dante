// FUN FACTS
const funFacts = [
  "I say 'on my way' while still lying down 😭",
  "I overthink texts like it’s a court case",
  "I open apps and forget why I opened them",
  "I act tough but get shy easily",
  "I get hungry immediately after eating 💀"
];

function showFact() {
  document.getElementById("fact").innerText =
    funFacts[Math.floor(Math.random() * funFacts.length)];
}

// MEMES
const memes = [
  {
    img: "https://i.imgflip.com/30b1gx.jpg",
    text: "Me pretending I’m serious"
  },
  {
    img: "https://i.imgflip.com/26am.jpg",
    text: "Me after saying I’ll sleep early"
  },
  {
    img: "https://i.imgflip.com/1otk96.jpg",
    text: "My brain at 2AM"
  }
];

function newMeme() {
  const meme = memes[Math.floor(Math.random() * memes.length)];
  document.getElementById("memeImg").src = meme.img;
  document.getElementById("memeText").innerText = meme.text;
}
newMeme();

// =======================
// 5 STAGE QUIZ 😈
// =======================

const stages = [
  {
    stage: "STAGE 1 😇 (Easy)",
    q: "What do I do when I’m bored?",
    options: ["Read a book", "Sleep", " scratch my balls", "start disturbing siblings"],
    answer: "start disturbing siblings"
  },
  {
    stage: "STAGE 2 😏",
    q: "When I say 'I’m fine', I actually mean:",
    options: ["I’m fine", "I’m hungry", "I’m tired", "i also don't know"],
    answer: "Something is wrong"
  },
  {
    stage: "STAGE 3 😂",
    q: "My biggest weakness?",
    options: ["Food", "Sleep", "arm pits", "when you whisper in my ears"],
    answer: "when you whisper in my ears"
  },
  {
    stage: "STAGE 4 🤡",
    q: "What describes me best?",
    options: ["Serious & calm", "Normal human", "look humble but nasty", "Confusing"],
    answer: "look humble but nasty"
  },
  {
    stage: "FINAL STAGE 🔥",
    q: "After this quiz, what am I?",
    options: [
      "A red flag 🚩",
      "Annoying but funny",
      "Cute and unforgettable 😌",
      "All of the above"
    ],
    answer: "Annoying but funny"
  }
];

let currentStage = 0;

function loadQuiz() {
  const stage = stages[currentStage];
  document.getElementById("question").innerHTML =
    `<strong>${stage.stage}</strong><br>${stage.q}`;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  stage.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    answers.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const result = document.getElementById("result");
  const correct = stages[currentStage].answer;

  if (selected === correct) {
    result.innerText = "✅ Correct 😌 You know me fr";
  } else {
    result.innerText = "❌ I don't know why u are this stupid buh🤦😂 still love you";
  }

  currentStage++;

  setTimeout(() => {
    if (currentStage < stages.length) {
      result.innerText = "🔓 Next stage unlocked!";
      loadQuiz();
    } else {
      document.getElementById("question").innerHTML =
        "🎉 QUIZ COMPLETED 🎉";
      document.getElementById("answers").innerHTML = "";
      result.innerText =
        "If you reached here… congrats 😭 you officially know me too well 💖";
    }
  }, 1500);
}

loadQuiz();

// SURPRISE
function surprise() {
  document.body.classList.add("shake");
  document.getElementById("surpriseText").innerText =
    "Final verdict: dramatic, chaotic, but lowkey lovable 💀💖";
  setTimeout(() => document.body.classList.remove("shake"), 600);
      }
