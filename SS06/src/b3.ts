abstract class absmethod_and_method {
    constructor(protected name: string) { }
    //abs method lop con bat buoc phai trien khai
    abstract cal(): number;

    //method: da trien khai san
    getname(): string {
        return this.name;
    }
}
class Rect extends absmethod_and_method {
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }
    cal(): number {
        return this.width * this.height
    }
}
class Cir extends absmethod_and_method {
    constructor(name: string, private radius: number) {
        super(name)
    }
    cal(): number {
        return Math.PI * this.radius ** 2;
    }
}

const rect1 = new Rect("Rectangle", 5, 5)
const cir = new Cir("Circle", 7)

console.log(rect1.getname(), "Area", rect1.cal());
console.log(cir.getname(), "Area", cir.cal());

