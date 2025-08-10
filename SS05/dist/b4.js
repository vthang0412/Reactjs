"use strict";
//@ts-ignore
class Vehicle {
    constructor(id, name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    display() {
        console.log(`
            Id:${this.id} ,
            Year:${this.year},
            Company:${this.company},
            Name:${this.name}`);
    }
}
//@ts-ignore
let Xe = new Vehicle(1, "Ab125", 2021, "Honda");
//@ts-ignore
Xe.display();
