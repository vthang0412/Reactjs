class Datastore<T>{
    private data:T[]=[];
    add(item:T):void{
        this.data.push(item);
    }
    getAll():T[]{
        return this.data;
    }
    remove(index:number):void{
        if(index >=0 && index<this.data.length){
            this.data.splice(index,1);
        }
    }
    static fromArr<U>(items:U[]):Datastore<U>{
        const store = new Datastore<U>();
        store.data = [...items];
        return store;
    }
}   
const numberStore = Datastore.fromArr([1, 2, 3]);
console.log(numberStore.getAll());

console.log(numberStore.remove(1));

console.log(numberStore.getAll());


