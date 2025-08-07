interface Person{
    name:string,
    age:number,
}
interface Employee{
    employeeId:string,
    department:string,
}
type StaffMember = Person & Employee;
function  printStaffInfo(staff: StaffMember): void{
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}
const staff: StaffMember = {
    name:"Dang Van Thang",
    age:19,
    employeeId:"EMP001",
    department:"Ke toan"
}   
printStaffInfo(staff);
