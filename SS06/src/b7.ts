//@ts-ignore
class Student {
    constructor(private id: number, private name: string, private age: number) { }
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name
    }
    setInfo(name: string, age: number): void {
        this.name = name;
        this.age = age;
    }
    getInfo(): string {
        return `Id: ${this.id} , Name: ${this.name} , Age: ${this.age}`
    }

}

//@ts-ignore
class Classroom1 {
    private students: Student[] = [];
    //@ts-ignore
    private allStudents: Student[] = [];
    constructor(public className: string) { }

    showStudents2(): void {
        console.log(`Danh sach hoc sinh lop ${this.className}`);
        //@ts-ignore
        this.students.forEach(s => console.log(s.getInfo()));
    }
    addStudent(student: Student): void {
        this.students.push(student);

    }
    filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id)
    }
    removeStudent1(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const remove = this.students.splice(index, 1)[0];
            if (remove && this.allStudents.filter(s => s.getId() === remove.getId()).length === 0) {
                this.allStudents.push(remove);
            }
        } else {
            console.log(`Khong tim thay hoc sinh co id`);
        }
    }
    editStudent(id: number, newName: string, newAge: number): void {
        const student = this.filterStudent(id);
        if (student) {
            //@ts-ignore
            student.setInfo(newName, newAge);
        } else {
            console.log(`Không tìm thấy học sinh có id ${id}`);
        }
    }
    showAllStudents1(): void {
        console.log(`Danh sach tat ca hoc sinh lop ${this.className}`);
        //@ts-ignore
        this.allStudents.forEach(s => console.log(s.getInfo()));
    }
}
const classroom = new Classroom1("Lớp A");
//@ts-ignore
const s1 = new Student(1, "Nam",20);
//@ts-ignore
const s2 = new Student(2, "Lan",21);
//@ts-ignore
const s3 = new Student(3, "Hùng",20);

classroom.addStudent(s1);
classroom.addStudent(s2);
classroom.addStudent(s3);

classroom.showStudents2();

classroom.editStudent(2, "Bình Updated", 21);
classroom.removeStudent1(3);

classroom.showStudents2();
classroom.showAllStudents1();
