let regFormEl = document.getElementById("reg-form");
let usnBox = document.getElementById("usn");
let emailBox = document.getElementById("email");
let pwBox = document.getElementById("pw");
let dobBox = document.getElementById("dob");
let cityBox = document.getElementById("city");

regFormEl.addEventListener("submit", function (e) {
  e.preventDefault(); // Its used to stop the default functionality

  let username = usnBox.value;
  let email = emailBox.value;
  let password = pwBox.value;
  let dateOfBirth = dobBox.value;
  let city = cityBox.value;
  console.log(username, email, password, dateOfBirth, city);
});
