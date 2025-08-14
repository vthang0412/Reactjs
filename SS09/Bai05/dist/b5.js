"use strict";
class Datastore {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
    }
    static fromArr(items) {
        const store = new Datastore();
        store.data = [...items];
        return store;
    }
}
const numberStore = Datastore.fromArr([1, 2, 3]);
console.log(numberStore.getAll());
console.log(numberStore.remove(1));
console.log(numberStore.getAll());
