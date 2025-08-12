abstract class Person{
    constructor(public name:string){
        this.name = name;
    }
    displayInfo():void{
        console.log(`Name:${this.name}`);
        
    }
}
class Student extends Person{
    constructor(public name:string, public id:string){
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Ma sinh vien:${this.id}\n Ten sinh vien:${this.name}`);
        
    }
}
class Teacher extends Person{
     constructor(public name:string, public subject:string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Mon hoc:${this.subject}\n Ten giao vien:${this.name}`);
    }
}
const student = new Student("Nguyễn Văn A", "SV001");
const teacher = new Teacher("Trần Thị B", "Toán học");

student.displayInfo();
console.log("-----");
teacher.displayInfo();