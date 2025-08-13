"use strict";
function flatten(arr) {
    const result = [];
    arr.forEach(element => {
        element.forEach(item => {
            result.push(item);
        });
    });
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
