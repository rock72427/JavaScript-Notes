// let n = 17;
// let flag = 1;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     flag = 0;
//     break;
//   }
// }
// function isPrime(flag) {
//   if (flag == 0) {
//     return false;
//   }
//   return true;
// }
// if (isPrime(flag)) {
//   console.log(`${n} is a prime number`);
// } else {
//   console.log(`${n} is not a prime number`);
// }

let travels_1 = {
  travelsId: "OR101",
  travelsName: "Orange",
  bookings: [],
  book: function (name, seatNo) {
    console.log(
      `${name} is booked seat in ${this.travelsName} travels with seat number ${seatNo}`
    );
    let obj = { passenger: `${name}, ${this.travelsId}, ${seatNo}` };

    this.bookings.push(obj);
  },
};
console.log(travels_1.bookings);
travels_1.book("Rajesh", 41);
travels_1.book("Raj", 42);
console.log(travels_1.bookings);
