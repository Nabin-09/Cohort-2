// Base class: Circle
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  
    paint() {
      console.log(`Painting with color ${this.color}`);
    }
  }
  
  // Derived class: Cylinder (inherits from Circle)
  class Cylinder extends Circle {
    constructor(radius, color, height) {
      // Call the parent class constructor using super()
      super(radius, color);
      this.height = height;
    }
  
    // Method specific to Cylinder class
    volume() {
      return this.area() * this.height;
    }
  
    // Overriding the paint method
    paint() {
      super.paint(); // Call parent method
      console.log(`This is a painted cylinder of height ${this.height}.`);
    }
  }
  
  // Test the classes
  const myCircle = new Circle(5, "blue");
  console.log("Circle Area:", myCircle.area());
  myCircle.paint();
  
  const myCylinder = new Cylinder(5, "red", 10);
  console.log("Cylinder Volume:", myCylinder.volume());
  myCylinder.paint();
  