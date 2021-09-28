const chalk = require('chalk');
var score = 0
var readlinesync = require('readline-sync');
var userName = readlinesync.question("Enter your name: ");
console.log(chalk.bold.rgb(10, 100, 200)("Welcome " + userName + " to HOW MUCH DO YOU KNOW ABOUT NEOG CAMP"));
console.log("--------*********--------")
function play(question, answer) {
  var useranswer = readlinesync.question(question);
  if(useranswer === answer) {
    console.log("right!");
    score=score+1;
  }
  else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("--------*********--------")
}

var questions = [
  {
    question: "what does g mean in neog camp?",
    answer: "grammers"
  },
  {
    question: "which company is hiring partner of neoG camp",
    answer: "roc8"
  },   {
    question: "The mentor for neogcamp is software developer in?",
    answer: "Microsoft"
  },
    {
    question: "Is neogcamp beginner friendly? (yes/no)",
    answer: "yes"
  },
   {
    question: "Which frontend js framework is being taught in neoG camp?",
    answer: "React"
  }
];

for(var i=0; i<questions.length;i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your total score is :", score);
console.log("Top Scores:")
console.log("Sandy: 3")
console.log("Crossed the top score? Ping me to update.")