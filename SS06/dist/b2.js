"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Job type:${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    caculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    caculateSalary() {
        return 10000000;
    }
}
const partime = new PartimeJob("part-time", 22);
const fulltime = new FulltimeJob("Full-time");
partime.printType();
console.log("Salary:", partime.caculateSalary().toLocaleString(), "VND");
fulltime.printType();
console.log("Salary:", fulltime.caculateSalary().toLocaleString(), "VND");
