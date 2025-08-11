interface Geometry{
    calculateArea():number;
    calculatePerimeter():number;
}

class Circle implements Geometry{
    constructor(private radius:number){}
    calculateArea(): number {
        return Math.PI * this.radius **2

    }
    calculatePerimeter(): number {
        return 2*Math.PI * this.radius
    }
}
class Rectangle implements Geometry{
    constructor(private width:number,private height:number){}
    calculateArea(): number {
        return this.width * this.height
    }
    calculatePerimeter(): number {
        return 2*(this.width + this.height)
    }
}

const circle = new Circle(7);
console.log("Circle Area:",circle.calculateArea());
console.log("Circle Perimeter:",circle.calculatePerimeter());
//@ts-ignore
const rectangle = new Rectangle(5,5);
//@ts-ignore
console.log("Rectangle Area:",rectangle.calculateArea());
//@ts-ignore
console.log("Rectangle Perimeter:",rectangle.calculatePerimeter());
