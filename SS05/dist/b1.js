"use strict";
//@ts-ignore
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    greet() {
        console.log(`Name:${this.name} ,San xuat:${this.year} ,Hang xe:${this.company}`);
    }
}
const xe = new Vehicle("Rolls royce", 2020, "Khongbiet");
xe.greet();
