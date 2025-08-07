"use strict";
function printStaffInfo(staff) {
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}
const staff = {
    name: "Dang Van Thang",
    age: 19,
    employeeId: "EMP001",
    department: "Ke toan"
};
printStaffInfo(staff);
