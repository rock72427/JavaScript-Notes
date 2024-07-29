let account_1 = {
  accName: "Satish Kumar",
  transactions: [100, 400, -500, 700, -100, 200],
  pin: 1234,
};
let account_2 = {
  accName: "Rajesh Singh",
  transactions: [500, -200, 400, -500, 800],
  pin: 2345,
};
let account_3 = {
  accName: "Sita Rama Raju",
  transactions: [100, 200, 900, -200, -300],
  pin: 3456,
};
let account_4 = {
  accName: "chushak chowdary",
  transactions: [400, -100, 200, 300, -300],
  pin: 4567,
};

let accounts = [account_1, account_2, account_3, account_4];

function createUserNames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.accName
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
}
createUserNames(accounts);

// Login Module
let loginInForm = document.getElementById("login-form");
let usnEl = document.getElementById("usn");
let pinEl = document.getElementById("pin");

let currentAcc;

loginInForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = usnEl.value;
  let pin = Number(pinEl.value);

  // Finding Current Account
  currentAcc = accounts.find(function (acc) {
    if (acc.username === username) {
      return true;
    }
  });
  console.log(currentAcc);
  if (currentAcc && currentAcc.pin === pin) {
    let userMessage = document.getElementById("user-message");
    userMessage.innerText = `Welcome back, ${
      currentAcc.accName.split(" ")[0]
    } 😊`;
    let main = document.querySelector(".main");
    main.classList.remove("main");
  }

  usnEl.value = pinEl.value = "";
});
