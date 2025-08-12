"use strict";
class Animal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    printName() {
        console.log(`Ten dong vat:${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Haha");
    }
}
const myCat = new Cat("Meo beo");
const myDog = new Dog("Cau vang");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
