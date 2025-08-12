"use strict";
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong`);
        }
        else {
            console.log("Sai mat khau");
        }
    }
    logOut() {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log("Tai khoan bi khoa");
            return;
        }
        super.login(password);
    }
}
const user1 = new userAcc("B24", "nguyenvana", "123456", "user", "active");
const user2 = new userAcc("M25", "tranthib", "654321", "user", "banned");
console.log("=== User 1 ===");
user1.login("123456");
user1.logOut();
console.log("=== User 2 ===");
user2.login("654321");
