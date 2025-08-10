class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    print() {
        console.log(`Name:${this.name},
                    Company:${this.company},
                    Phone:${this.phone}
            `);
    }
}
let employee = new Employee("Dang Van Thang", "PTIT", "0866171066");
employee.print();
