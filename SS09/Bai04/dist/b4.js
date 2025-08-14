"use strict";
function withDefault(value, defaultValue) {
    return value === undefined ? defaultValue : value;
}
console.log(withDefault(undefined, "default"));
console.log(withDefault(42, 0));
console.log(withDefault(true, false));
