let user_1 = { id: 1, name: "Satish", city: "UP" };
let user_2 = user_1;
user_2.city = "Bangalore";
console.log(user_1.city); // Bangalore
console.log(user_2.city); // Bangalore
