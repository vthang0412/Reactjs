"use strict";
function findItem(arr, value) {
    return arr.find(item => item === value);
}
let num = [1, 2, 3, 4];
console.log(findItem(num, 3));
console.log(findItem(num, 10));
