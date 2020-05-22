const startBtn = document.getElementById("start");
const playerS = document.getElementById("playerS");
const playerL = document.getElementById("playerL");
window.addEventListener("keydown", countStrokes, true);
let countS = 0;
let countL = 0;

function countStrokes(event) {
  if (event.keyCode == "76") {
    countL += 1;
  } else if (event.keyCode == "83") {
    countS += 1;
  }
  playerS.innerHTML = `Player S ${countS}`;
  playerL.innerHTML = `Player L ${countL}`;
}

function finalCountDown() {
  const timer = document.getElementById("time").value;
  setTimeout(() => {
    countL > countS
      ? alert(`Player L wins with ${countL} strokes`)
      : alert(`Player S wins with ${countS} strokes`);
  }, timer * 1000);
}

startBtn.addEventListener("click", () => finalCountDown());
