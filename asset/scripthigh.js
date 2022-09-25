var playsName = document.querySelector("#playname");
var theScores = document.querySelector("#thescore");
var theHeights = document.querySelector("#highscore");
var todoCountSpan = document.querySelector("#todo-count");

function displayName() {
  theHeights.innerHTML = "";

  for (var i = 0; i < height.length; i++) {
    var loop = height[i];

    var li = document.createElement("li");
    li.textContent = height;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "clear";

    li.appendChild(button);
    theHeights.appendChild(li);
  }
}

function init() {
  var storedNames = JSON.parse(localStorage.getItem("height"));

  if (storedNames !== null) {
    height = storedNames;
  }

  displayName();
}

function storedname() {
  localStorage.setItem("height", JSON.stringify(height));
}

theScores.addEventListener("submit", function (event) {
  event.preventDefault();

  var scoNmae = playsName.value.trim();

  if (scoNmae === "") {
    return;
  }

  height.push(scoNmae);
  playsName.value = "";

  storedname();
  displayName();
});

theHeights.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    height.splice(index, 1);

    storedname();
    displayName();
  }
});

init();
