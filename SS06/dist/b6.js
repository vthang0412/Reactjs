"use strict";
//@ts-ignore
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
//@ts-ignore
let allStudents = [];
//@ts-ignore
class Classroom {
    constructor(className) {
        this.className = className;
        this.students = [];
    }
    showStudents() {
        console.log(`Danh sach hoc sinh lop ${this.className}`);
        this.students.forEach(s => {
            console.log(`Id:${s.getId()} , Name:${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(s => s.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            //@ts-ignore
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Khong tim thay hoc sinh`);
        }
    }
}
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Châu"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Khánh"));
//@ts-ignore
let classA = new Classroom("A");
//@ts-ignore
let classB = new Classroom("B");
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
classA.showStudents();
classB.showStudents();
