"use strict";
let average = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = average.reduce((sum, point) => sum + point, 0);
let average1 = total / average.length;
console.log(average1.toFixed(2));
