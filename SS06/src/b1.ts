abstract class Shape {
    constructor(protected name:string) {
        this.name = name;
    };
    getName():string{
        return this.name;
    }
    abstract getSize():void;
}
//@ts-ignore
class rectangle extends Shape{
    constructor(name:string, private width:number ,private height:number){
        super(name);
    }
    getSize():void{
        console.log(`Width:${this.width} - Height:${this.height}`);
        
    }
}
const rect = new rectangle("Rectangle",5,10);
console.log("Shape name:",rect.getName());
rect.getSize();