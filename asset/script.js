const startBut = document.querySelector(".start");
const setTimer = document.querySelector(".timer");
const testQuestion = document.querySelector(".question");
const buttonB1 = document.querySelector(".b1");
const buttonB2 = document.querySelector(".b2");
const buttonB3 = document.querySelector(".b3");
const buttonB4 = document.querySelector(".b4");
 
//set timer for project
let secondsLeft = 70;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    setTimer.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      window.location = "scores.html";
    }
  }, 1000);
}

// make a object to set up questions get rid of functions
const questions = [
  {
    query: "Commonly used data types Do Not include",
    answers: [
      { text: "Strings" },
      { text: "Boolean" },
      { text: "Alerts", correct: true },
      { text: "Numbers" },
    ],
  },
  {
    query: "Arrays in Javascripit can be used to store __________",
    answers: [
      { text: "Numbers and Strings" },
      { text: "Other Arrays" },
      { text: "Boolean" },
      { text: " All the above", correct: true },
    ],
  },
  {
    query:
      "A very important tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript" },
      { text: "Terminal/bash" },
      { text: "For loops",},
      { text: "Console.log", correct: true },
    ],
  },
  {
    query:
      "String values must be enclosed within______when being assigned to variables",
    answers: [
      { text: "Commas" },
      { text: "Curly Brackets" },
      { text: "Quotes", correct: true },
      { text: "Parenthesis" },
    ],
  },
  {
    query: "The condition in an if/else statement is enclosed with ________",
    answers: [
      { text: "Quotes" },
      { text: "Curly Brackets" },
      { text: "Parathesis", correct: true },
      { text: "Square Brackets" },
    ],
  },
];
 
//used to display the question on the screen
function askQuestion (index){
  const question = questions[index]
    testQuestion.textContent = question.query;
    buttonB1.textContent = question.answers[0].text;
    buttonB2.textContent =  question.answers[1].text;
    buttonB3.textContent = question.answers[2].text;
    buttonB4.textContent = question.answers[3].text;
  
}

setTime();
askQuestion(0)
