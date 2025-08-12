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
class adminAcc extends Account {
    banUser(user) {
        user.status = "banned";
        console.log(`Admin ${this.userName} da khoa tai khoan ${user.userName}`);
    }
}
const user1 = new userAcc("Ma01", "nguyenvana", "123456", "user", "active");
const admin1 = new adminAcc("Ma02", "adminboss", "admin123", "admin");
console.log("\n--- Trước khi bị ban ---");
user1.login("123456");
user1.logOut();
console.log("\n--- Admin thực hiện ban ---");
admin1.login("admin123");
admin1.banUser(user1);
// Sau khi bị ban
console.log("\n--- Sau khi bị ban ---");
user1.login("123456");
