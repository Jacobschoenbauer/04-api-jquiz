var startBut = document.querySelector(".start");
var setTimer = document.querySelector(".timer");
var testQuestion = document.querySelector(".question");
var buttonB1 = document.querySelector(".b1");
var buttonB2 = document.querySelector(".b2");
var buttonB3 = document.querySelector(".b3");
var buttonB4 = document.querySelector(".b4");

var secondsLeft = 70;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    setTimer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      window.location = "index3.html";
    }
  }, 1000);
}
setTime();

var question1 = function actualQuestion1() {
  testQuestion.textContent = "Commonly used data types Do Not include";
  buttonB1.textContent = " Strings";
  buttonB2.textContent = " Booleans";
  buttonB3.textContent = " Alerts";
  buttonB4.textContent = " Numbers";
}
function actualQuestion2() {
  testQuestion.textContent =
    "The condition in an if/else statement is enclosed with________.";
  buttonB1.textContent = " Quotes";
  buttonB2.textContent = " Curly Brackets";
  buttonB3.textContent = " Parathesis";
  buttonB4.textContent = " Square Brackets";
}

function actualQuestion3() {
  testQuestion.textContent =
    "Arrays in Javascripit can be used to store __________";
  buttonB1.textContent = " Numbers and Strings";
  buttonB2.textContent = " Other Arrays";
  buttonB3.textContent = " Booleans";
  buttonB4.textContent = " All the above";
}

function actualQuestion4() {
  testQuestion.textContent =
    "String values must be enclosed within _______ when being assigned to a variable";
  buttonB1.textContent = " Commas";
  buttonB2.textContent = " Curly Brackets";
  buttonB3.textContent = " Parathesis";
  buttonB4.textContent = " Quotes";
}
function actualQuestion5() {
  testQuestion.textContent =
    "A very important tool used during development and debugging for printing content to the debugger is:";
  buttonB1.textContent = " JavaScript";
  buttonB2.textContent = " Terminal/bash";
  buttonB3.textContent = " For loops";
  buttonB4.textContent = " Console.log";
}
