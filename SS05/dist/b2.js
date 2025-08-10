"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    display() {
        console.log(`id:${this.id} , age:${this.age} , email;${this.email}`);
    }
}
const student = [];
let student1 = new Student(1, 19, "vthang041206@gmail.com");
student.push(student1);
student.forEach(e => e.display());
