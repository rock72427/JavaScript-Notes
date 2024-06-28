let student = {
  id: 101,
  firstName: "Satish",
  lastName: "Kumar",
  gender: "Male",
  birthYear: 2000,
  age: 24,
};
let stuName = `${student.firstName} ${student.lastName}`;
console.log(stuName); // Satish Kumar

let year = student["birthYear"];
console.log(year); // 2000
