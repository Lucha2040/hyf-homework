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
    let r = MakeRandomInteger(256, 0);
    let g = MakeRandomInteger(256, 0);
    let b = MakeRandomInteger(256, 0);
    let newRgb = `rgb(${r},${g},${b})`;
    return newRgb;
  }

  let newX = MakeRandomInteger(400, 1);
  let newY = MakeRandomInteger(200, 1);
  let newR = MakeRandomInteger(100, 1);

  let c = new Circle(newX, newY, newR, makeColor());
  c.draw();
}, 500);

function MakeRandomInteger(max, unit) {
  return Math.floor(Math.random() * max + unit);
}
