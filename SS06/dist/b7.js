"use strict";
//@ts-ignore
class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setInfo(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Id:${this.id} , Name:${this.name} , Age:${this.age}`;
    }
}
//@ts-ignore
class Classroom1 {
    constructor(className) {
        this.className = className;
        this.students = [];
        //@ts-ignore
        this.allStudents = [];
    }
    showStudents2() {
        console.log(`Danh sach hoc sinh lop ${this.className}`);
        //@ts-ignore
        this.students.forEach(s => console.log(s.getInfo()));
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(s => s.getId() === id);
    }
    removeStudent1(id) {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const remove = this.students.splice(index, 1)[0];
            if (remove && this.allStudents.filter(s => s.getId() === remove.getId()).length === 0) {
                this.allStudents.push(remove);
            }
        }
        else {
            console.log(`Khong tim thay hoc sinh co id`);
        }
    }
    editStudent(id, newName, newAge) {
        const student = this.filterStudent(id);
        if (student) {
            //@ts-ignore
            student.setInfo(newName, newAge);
        }
        else {
            console.log(`Không tìm thấy học sinh có id ${id}`);
        }
    }
    showAllStudents1() {
        console.log(`Danh sach tat ca hoc sinh lop ${this.className}`);
        //@ts-ignore
        this.allStudents.forEach(s => console.log(s.getInfo()));
    }
}
const classroom = new Classroom1("Lớp A");
//@ts-ignore
const s1 = new Student(1, "Nam", 20);
//@ts-ignore
const s2 = new Student(2, "Lan", 21);
//@ts-ignore
const s3 = new Student(3, "Hùng", 20);
classroom.addStudent(s1);
classroom.addStudent(s2);
classroom.addStudent(s3);
classroom.showStudents2();
classroom.editStudent(2, "Bình Updated", 21);
classroom.removeStudent1(3);
classroom.showStudents2();
classroom.showAllStudents1();
