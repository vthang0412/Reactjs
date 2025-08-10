//@ts-ignore
class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
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