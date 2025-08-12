"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.name} da giam toc do xuong ${this.speed}`);
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`${this.name} da tang toc do len ${this.speed}`);
    }
    showSpeed() {
        console.log(`Toc do hien tai cua ${this.name} : ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.gear = gear;
        this.gear = gear;
    }
    showInfo() {
        console.log(`Ten xe:${this.name}`);
        console.log(`Toc do:${this.speed}`);
        console.log(`Ma dinh danh:${this.id}`);
        console.log(`So banh rang:${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 15, "B001", 21);
bike.showInfo();
bike.speedUp(5);
bike.slowDown(10);
bike.showSpeed();
