let clicks = [];
const counter = document.getElementById("counter");
const restartBtn = document.getElementById("restartBtn");

Print = function (button) {
  button.className = "button active";
  setTimeout(function () {
    button.className = "button";
  }, 100);

  let letter = button.textContent.trim();
  clicks.push(letter);
};
document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 32) {
    Print(document.getElementById("space"));
  } else if (key === 219) {
    Print(document.getElementById("["));
  } else if (key === 221) {
    Print(document.getElementById("]"));
  } else if (key === 186) {
    Print(document.getElementById(";"));
  } else if (key === 222) {
    Print(document.getElementById("'"));
  } else if (key === 188) {
    Print(document.getElementById(","));
  } else if (key === 190) {
    Print(document.getElementById("."));
  } else if (key === 191) {
    Print(document.getElementById("/"));
  } else if (65 >= key <= 90) {
    var pressedKey = String.fromCharCode(key);
    document.getElementById(pressedKey).click();
  }
  var value = parseInt(counter.innerHTML);
  value++;
  counter.innerHTML = value;
};

const init = function () {
  counter.innerHTML = 0;
};

restartBtn.addEventListener("click", function () {
  init();
});
