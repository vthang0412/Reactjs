class Employee {
    constructor(public name: string, protected company: string, private phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Name:${this.name} - company:${this.company} - Phone:${this.phone}`);
    }

}
class Manager extends Employee {
    public teamSize: number;
    constructor(public name: string, protected company: string, phone: number, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    public printInfo(): void {
        super.printInfo();
        console.log(`${this.teamSize}`);

    }
}
const emp = new Employee("Thang", "Vthang", 866171066);
emp.printInfo()

const manager = new Manager("chien", "xchien", 93847493, 4);
manager.printInfo()