const namesEnter = document.querySelector("#names");
const listNames = document.querySelector("#lastscores");
const eventNames = document.querySelector("#finalscore");
var namie = [];

function listingNames() {
  //clears list names
  listNames.innerHtml = "";
  //sets a list of names that goes through the for loop
  for (var i = 0; i < namie.lenght; i++) {
    var nightName = namie[i];

    // adds li to the html
    var li = document.createElement("li");
    li.textContent = nightName;
    li.setAttribute("data-index", i);

    listNames.appendChild(li);
  }
}
//gets names from local storage
function init() {
  var storedNames = JSON.parse(localStorage.getItem("namie"));
  if (storedNames !== null) {
    namie = storedNames;
  }
  // listes the names to dom
  listingNames();
}
// names to local storage
function storedNames() {
  //stringify and sends names to local storage
  localStorage.setItem("namie", JSON.stringify(namie));
}

eventNames.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameInput = namesEnter.value.trim();
  if (nameInput === "") {
    return;
  }

  namie.push(nameInput);
  namesEnter.value = "";

  listingNames();
  storedNames();
});

listingNames();

storedNames();

init();
