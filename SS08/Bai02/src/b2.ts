function check<T extends boolean>(flag: T) {
    if (flag) {
        console.log("Xin chao");
    } else {
        console.log("Tam biet");
    }
}
check(true)
check(false)