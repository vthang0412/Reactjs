"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name:${this.name} - company:${this.company} - Phone:${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.name = name;
        this.company = company;
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`${this.teamSize}`);
    }
}
const emp = new Employee("Thang", "Vthang", 866171066);
emp.printInfo();
const manager = new Manager("chien", "xchien", 93847493, 4);
manager.printInfo();
