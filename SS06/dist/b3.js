"use strict";
class absmethod_and_method {
    constructor(name) {
        this.name = name;
    }
    //method: da trien khai san
    getname() {
        return this.name;
    }
}
class Rect extends absmethod_and_method {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    cal() {
        return this.width * this.height;
    }
}
class Cir extends absmethod_and_method {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    cal() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const rect1 = new Rect("Rectangle", 5, 5);
const cir = new Cir("Circle", 7);
console.log(rect1.getname(), "Area", rect1.cal());
console.log(cir.getname(), "Area", cir.cal());
