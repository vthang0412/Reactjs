//@ts-ignore
class Vehicle {
    name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(id: number, name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    display(): void {
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
Xe.display()