//Calling elements from HTML
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
    context.arc(this.x, this.y, this.r, 0,2 * Math.PI);
    //Coloring and shadowing, just experimenting
    context.shadowBlur = 25;
    context.shadowColor = "blue";
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

setInterval(() => { 
  //Functions could be reduce to just one that produces random numbers with maximun and minimun according to the variables, but I didn't have enough time. 
  function makeColor () {
    let arrRGB = [];
    for (i=0; i < 3; i++) {
      const getRgb = Math.floor(Math.random()*256); 
      arrRGB.push(getRgb);
    }
    let newRgb = `rgb(${arrRGB[0]},${arrRGB[1]},${arrRGB[2]}`;
    return newRgb
  }
  function randomX () {
    let newX = Math.floor((Math.random()*400)+1);
    return newX
  }
  
  function randomY () {
    let newY = Math.floor((Math.random()*200)+1);
     return newY
  }
  
  function randomR () {
    let newR = Math.floor((Math.random()*100)+1);
    return newR
  }
  let c = new Circle (
    randomX(), 
    randomY(), 
    randomR(),
    makeColor()
  );
  c.draw(); 
}, 500)



//// Note: Missin the canvas to have the same width and height of the screen.


