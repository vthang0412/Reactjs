function findOdd<T>(arr: T[]): T | undefined {
    return arr.find(item => typeof item === "number" && item % 2 === 0);
}
console.log(findOdd([1, 2, 3, 4, 5, 6]));
