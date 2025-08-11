"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(7);
console.log("Circle Area:", circle.calculateArea());
console.log("Circle Perimeter:", circle.calculatePerimeter());
//@ts-ignore
const rectangle = new Rectangle(5, 5);
//@ts-ignore
console.log("Rectangle Area:", rectangle.calculateArea());
//@ts-ignore
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());
