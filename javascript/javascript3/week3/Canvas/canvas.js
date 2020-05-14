const firstCanvas = document.getElementById("firstCanvas");
const context = firstCanvas.getContext("2d");

class Circle {
  constructor(x, y, r, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fillColor = fillColor;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.shadowBlur = 25;
    context.shadowColor = "blue";
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

setInterval(() => {
  function makeColor() {
    let r = MakeRandomInteger(0, 256);
    let g = MakeRandomInteger(0, 256);
    let b = MakeRandomInteger(0, 256);
    let newRgb = `rgb(${r},${g},${b})`;
    return newRgb;
  }

  let newX = MakeRandomInteger(1, 400);
  let newY = MakeRandomInteger(1, 200);
  let newR = MakeRandomInteger(1, 100);

  let c = new Circle(newX, newY, newR, makeColor());
  c.draw();
}, 500);

function MakeRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
