"use strict";
let firstName = "john";
let lastName = "doe";
function viethoachucaidau(word) {
    if (word.length === 0) {
        return word;
    }
    // @ts-ignore
    return word[0].toUpperCase() + word.slice(1);
}
firstName = viethoachucaidau(firstName);
lastName = viethoachucaidau(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
