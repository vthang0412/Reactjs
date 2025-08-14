"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "alice" };
const job = { role: "Developer" };
const result = mergeObjects(person, job);
console.log(result);
