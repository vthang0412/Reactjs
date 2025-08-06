let chuoi: string = "banana";
let result = "";
for (let i = 0; i < chuoi.length; i++) {
    let char = chuoi[i];
    //@ts-ignore
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);