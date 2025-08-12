class Account {
    public isLogin: boolean;
    constructor(public id: string, public userName: string, private password: string, public role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong`);
        } else {
            console.log("Sai mat khau");
        }
    }
    logOut(): void {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    public status: "active" | "banned";
    constructor(id: string, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }
    public login(password: string): void {
        if (this.status === "banned") {
            console.log("Tai khoan bi khoa");
            return;
        }
        super.login(password);
    }
}
class adminAcc extends Account {
    public banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Admin ${this.userName} da khoa tai khoan ${user.userName}`);

    }
}
const user1 = new userAcc("Ma01", "nguyenvana", "123456", "user", "active");
const admin1 = new adminAcc("Ma02", "adminboss", "admin123", "admin");

console.log("\n--- Trc khi bi khoa---");
user1.login("123456");
user1.logOut();

console.log("\n--- Admin thuc hien khoa ---");
admin1.login("admin123");
admin1.banUser(user1);

// Sau khi bị ban
console.log("\n--- Sau khi bi khoa---");
user1.login("123456"); 