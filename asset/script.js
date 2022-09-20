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

function actualQuestion() {
  testQuestion.textContent =
    "The condition in an if/else statement is enclosed with________.";
buttonB1.textContent = " Quotes"
buttonB2.textContent = " Curly Brackets"
buttonB3.textContent = " Parathesis"
buttonB4.textContent = " Square Brackets"

}

actualQuestion();
