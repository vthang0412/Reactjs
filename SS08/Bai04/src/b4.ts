function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 }
}
let A = {name:"Thang",age:19}
let B = {name1:"Chien",age1:19}

let merge = mergeObj(A,B);
console.log(merge);
