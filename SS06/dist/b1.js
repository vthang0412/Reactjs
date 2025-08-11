"use strict";
class Shape {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    ;
    getName() {
        return this.name;
    }
}
//@ts-ignore
class rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width:${this.width} - Height:${this.height}`);
    }
}
const rect = new rectangle("Rectangle", 5, 10);
console.log("Shape name:", rect.getName());
rect.getSize();
