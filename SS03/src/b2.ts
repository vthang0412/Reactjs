let usernames: string = "Hello"
// usernames = 123;

let userName: string | number = "Hello"
userName = 123;

console.log(username); // Tại vì bên trên vừa khai báo usernames theo string rồi nên lỗi number bên dưới nhưng vẫn thay đổi được

console.log(userName); // Như này sẽ không còn thông báo lôi

