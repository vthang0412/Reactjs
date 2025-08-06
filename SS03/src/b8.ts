// @ts-ignore
function kiemtra(value) {
    let num = Number(value);
    if (isNaN(num)) {
        return null;
    }
    return num;
}
// @ts-ignore
function cong(a, b) {
    let num1 = kiemtra(a);
    let num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Tham so ko hop le"
    }
    return num1 + num2;
}
// @ts-ignore
function tru(a, b) {
    let num1 = kiemtra(a);
    let num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Tham so ko hop le"
    }
    return num1 - num2;
}
// @ts-ignore
function nhan(a, b) {
    let num1 = kiemtra(a);
    let num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Tham so ko hop le"
    }
    return num1 * num2;
}
// @ts-ignore   
function chia(a, b) {
    let num1 = kiemtra(a);
    let num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Tham so ko hop le"
    }
    return num1 / num2;
}
console.log(cong("5", 5));
console.log(tru("5", "hello"));
console.log(nhan("5", "5"));
console.log(chia("40", "20"));

