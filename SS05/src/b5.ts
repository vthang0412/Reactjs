class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    get wd() {
        return this.width;
    }
    set wd(width: number) {
        if (width > 0) {
            this.width = width;
        } else {
            console.log("Gia tri ko hop le");

        }
    }

    get hg() {
        return this.height;
    }
    set hg(height: number) {
        if (height > 0) {
            this.height = height;
        } else {
            console.log("Gia tri ko hop le");

        }
    }
    dientich(): number {
        return (this.width * this.height)
    }
    chuvi(): number {
        return (2 * (this.width + this.height))
    }
}
//@ts-ignore
let hcn = new Rectangle(5, 8);
console.log("Chieu rong", hcn.wd);
console.log("Chieu cao", hcn.hg);
console.log("Dien tich", hcn.dientich());
console.log("Chu vi", hcn.chuvi());

console.log("Cap nhat gia tri moi:");
hcn.wd = 10;
hcn.hg = 20;

console.log("Chieu rong", hcn.wd);
console.log("Chieu cao", hcn.hg);
console.log("Dien tich", hcn.dientich());
console.log("Chu vi", hcn.chuvi());
