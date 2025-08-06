let firstName: string = "john"
let lastName: string = "doe"

function viethoachucaidau(word: string): string {
    if (word.length === 0) {
        return word;
    }
    // @ts-ignore
    return word[0].toUpperCase() + word.slice(1);
}

firstName = viethoachucaidau(firstName)
lastName = viethoachucaidau(lastName)

let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);
