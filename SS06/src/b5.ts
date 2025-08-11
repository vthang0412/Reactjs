interface changeSpeed{
    speedUp(amount :number):void;
    slowDown(amount :number):void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(speed_bandau:number=0){
        this.speed=speed_bandau;
    }
    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tang toc:${amount} => Toc do hien tai:${this.speed}`);
    }
    slowDown(amount: number): void {
        this.speed -= amount;
        console.log(`Giam toc:${amount} => Toc do hien tai:${this.speed}`);
    }
    stop():void{
        this.speed = 0;
        console.log(`Dung xe => toc do hien tai:${this.speed}`);    
    }
}
const car = new Vehicle();
car.speedUp(100)
car.slowDown(30)
car.stop()