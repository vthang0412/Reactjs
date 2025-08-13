"use strict";
function mergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let A = { name: "Thang", age: 19 };
let B = { name1: "Chien", age1: 19 };
let merge = mergeObj(A, B);
console.log(merge);
