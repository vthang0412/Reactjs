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
const user1 = new userAcc("B24", "nguyenvana", "123456", "user", "active");
const user2 = new userAcc("M25", "tranthib", "654321", "user", "banned");

console.log("=== User 1 ===");
user1.login("123456");
user1.logOut();

console.log("=== User 2 ===");
user2.login("654321"); 