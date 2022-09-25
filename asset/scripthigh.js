var playsName = document.querySelector("#playname");
var theScores = document.querySelector("#thescore");
var theHeights = document.querySelector("#highscore");
var todoCountSpan = document.querySelector("#todo-count");

function renderTodos() {
  theHeights.innerHTML = "";

  for (var i = 0; i < height.length; i++) {
    var todo = height[i];

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
  var storedTodos = JSON.parse(localStorage.getItem("height"));

  if (storedTodos !== null) {
    height = storedTodos;
  }

  renderTodos();
}

function storeTodos() {
  localStorage.setItem("height", JSON.stringify(height));
}

theScores.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = playsName.value.trim();

  if (todoText === "") {
    return;
  }

  height.push(todoText);
  playsName.value = "";

  storeTodos();
  renderTodos();
});

theHeights.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    height.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});

init();
