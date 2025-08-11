"use strict";
class Vehicle {
    constructor(speed_bandau = 0) {
        this.speed = speed_bandau;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tang toc:${amount} => Toc do hien tai:${this.speed}`);
    }
    slowDown(amount) {
        this.speed -= amount;
        console.log(`Giam toc:${amount} => Toc do hien tai:${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dung xe => toc do hien tai:${this.speed}`);
    }
}
const car = new Vehicle();
car.speedUp(100);
car.slowDown(30);
car.stop();
