"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    displayInfo() {
        console.log(`Name:${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
        this.id = id;
    }
    displayInfo() {
        console.log(`Ma sinh vien:${this.id}\n Ten sinh vien:${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.name = name;
        this.subject = subject;
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Mon hoc:${this.subject}\n Ten giao vien:${this.name}`);
    }
}
const student = new Student("Nguyễn Văn A", "SV001");
const teacher = new Teacher("Trần Thị B", "Toán học");
student.displayInfo();
console.log("-----");
teacher.displayInfo();
