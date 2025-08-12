class Vehicle{
    constructor(protected name:string,protected speed:number,protected id:string){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount :number):void{
        this.speed = Math.max(0,this.speed - amount);
        console.log(`${this.name} da giam toc do xuong ${this.speed}`);
    }
    speedUp(amount:number):void{
        this.speed+=amount;
        console.log(`${this.name} da tang toc do len ${this.speed}`);
    }
    showSpeed():void{
        console.log(`Toc do hien tai cua ${this.name} : ${this.speed}`);
        
    }
}
class Bicycle extends Vehicle{
     constructor(protected name:string,protected speed:number,protected id:string,private gear:number){
        super(name,speed,id);
        this.gear = gear;
    }
    public showInfo():void{
        console.log(`Ten xe: ${this.name}`);
        console.log(`Toc do: ${this.speed}`);
        console.log(`Ma dinh danh: ${this.id}`);
        console.log(`So banh rang: ${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 15, "B001", 21);

bike.showInfo();    
bike.speedUp(5);     
bike.slowDown(10); 
bike.showSpeed(); 