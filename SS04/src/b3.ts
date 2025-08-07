interface Students {
    name:string;
    age:number;
    email:string;
}
let Student:Students = {
    name:"thang",
    age:19,
    email:"Thang@gmail.com"
};
console.log(`Ten toi la ${Student.name},toi ${Student.age} va email cua toi la ${Student.email} `)