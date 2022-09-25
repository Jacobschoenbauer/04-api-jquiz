const startBut = document.querySelector(".start");
const setTimer = document.querySelector(".timer");
const testQuestion = document.querySelector(".question");
const buttonB1 = document.querySelector(".b1");
const buttonB2 = document.querySelector(".b2");
const buttonB3 = document.querySelector(".b3");
const buttonB4 = document.querySelector(".b4");
const rightWrong = document.querySelector(".rightwrong");
const storedScore = document.querySelector(".score");
let timerInterval;

//set timer for project
let secondsLeft = 170;
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    setTimer.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      // stops countdown will not go negative
      clearInterval(setTime);
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
      { text: "For loops" },
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

function handleAnswer(answer, questionIndex) {
  console.log(answer);

  // check see if answer is correct
  const isCorrect = answer.correct === true;
  // let user know if correct or wrong

  // subtract time from count down if in correct
  if (isCorrect) {
    rightWrong.textContent = "Correct";
  } else {
    rightWrong.textContent = "Wrong";
    secondsLeft -= 10;
  }
  //leads this question to the next question

  // load next question
  askQuestion(questionIndex + 1);
}

const buttons = [buttonB1, buttonB2, buttonB3, buttonB4];

//used to display the question on the screen
function askQuestion(index) {
  const question = questions[index];
  testQuestion.textContent = question.query;
  // will send each button through this for each question
  buttons.forEach((button, buttonIndex) => {
    // clear event handler so it can move on to the next question and we can use the button again
    button.onclick = null;
    // get the answer
    const answer = question.answers[buttonIndex];
    // assign text to the button
    button.textContent = answer.text;
    // add event handler
    button.addEventListener("click", (e) => {
      handleAnswer(answer, index);
    });
  });
}

setTime();
askQuestion(0);


