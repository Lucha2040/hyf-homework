const roundedPI = Math.round(Math.PI * 100)/100; 

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    getDiameter() {
       this.diameter = 2 * this.radius; 
       console.log(this.diameter)
   }
   getCircumference() {
       this.circumference = 2 * roundedPI * this.radius;
       console.log(this.circumference)

   }
   getArea() {
       this.area = roundedPI * Math.pow(this.radius, 2);
       console.log(this.area)
   }
}  

let circle1 = new Circle(7); 
let circle2 = new Circle(9); 
let circle3 = new Circle(12);


circle1.getArea();
circle1.getCircumference();
circle1.getDiameter();

circle2.getArea();
circle2.getCircumference();
circle2.getDiameter();

circle3.getArea();
circle3.getCircumference();
circle3.getDiameter();
