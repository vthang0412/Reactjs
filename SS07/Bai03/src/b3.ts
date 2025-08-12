abstract class Animal{
    constructor(public name:string){
        this.name = name;
    }
    abstract makeNoise():void;
    printName():void{
        console.log(`Ten dong vat:${this.name}`);
    }
    
}
class Cat extends Animal{
    public makeNoise(): void {
        console.log("Meow");
        
    }
}
class Dog extends Animal{
    public makeNoise(): void {
        console.log("Haha");
        
    }
}
const myCat: Animal = new Cat("Meo beo");
const myDog: Animal = new Dog("Cau vang");

myCat.printName();
myCat.makeNoise(); 

myDog.printName();
myDog.makeNoise(); 
