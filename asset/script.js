var startBut = document.querySelector(".start");
var setTimer = document.querySelector(".timer");
var testQuestion = document.querySelector(".question");

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
  testQuestion.textContent = "First question";
}
actualQuestion();
