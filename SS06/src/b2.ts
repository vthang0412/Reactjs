abstract class Job {
    constructor(protected type: string) { }
    printType(): void {
        console.log(`Job type:${this.type}`);

    }
    abstract caculateSalary(): number;
}
class PartimeJob extends Job {
    constructor(type: string, private workingHour: number) {
        super(type);
    }
    caculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type)
    }
    caculateSalary(): number {
        return 10000000;
    }
}
const partime = new PartimeJob("part-time", 22);
const fulltime = new FulltimeJob("Full-time")
partime.printType()
console.log("Salary:", partime.caculateSalary().toLocaleString(), "VND");

fulltime.printType()
console.log("Salary:", fulltime.caculateSalary().toLocaleString(), "VND");

