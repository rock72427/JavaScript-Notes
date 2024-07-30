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
let userMessage = document.getElementById("user-message");
let viewStatement = document.getElementById("view-statement");
let section = document.getElementById("section");
let mainSection = document.getElementById("main-section");
let viewDeposits = document.getElementById("deposits");
let viewWithdrawls = document.getElementById("withdrawls");
let checkBalance = document.getElementById("checkBalance");
let balance = document.getElementById("balance");
let total = document.getElementById("total");
let amount = document.getElementById("amount");
let title = document.getElementById("title");

let currentAcc;

// Check if user is already logged in
if (localStorage.getItem("currentAcc")) {
  currentAcc = JSON.parse(localStorage.getItem("currentAcc"));
  userMessage.innerText = `Welcome back, ${
    currentAcc.accName.split(" ")[0]
  } 😊`;
  section.classList.remove("hidden");
  usnEl.style.display = "none";
  pinEl.style.display = "none";
  loginInForm.querySelector("input[type='submit']").style.display = "none";
  let logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.classList.add("btn", "btn-warning");
  loginInForm.appendChild(logoutBtn);
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("currentAcc");
    location.reload();
  });
}

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
    userMessage.innerText = `Welcome back, ${
      currentAcc.accName.split(" ")[0]
    } 😊`;
    localStorage.setItem("currentAcc", JSON.stringify(currentAcc));
    usnEl.style.display = "none";
    pinEl.style.display = "none";
    loginInForm.querySelector("input[type='submit']").style.display = "none";
    let logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    logoutBtn.classList.add("btn", "btn-warning");
    loginInForm.appendChild(logoutBtn);
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("currentAcc");
      location.reload();
    });
  }
  section.classList.remove("hidden");

  usnEl.value = pinEl.value = "";
});

// View Statement
viewStatement.addEventListener("click", function () {
  let currentAcc = JSON.parse(localStorage.getItem("currentAcc"));
  title.textContent = `All Transaction Done By ${currentAcc.accName}`;
  mainSection.classList.remove("hidden");
  amount.classList.add("hidden");
  displayTransaction(currentAcc.transactions);
});

// View Deposits
viewDeposits.addEventListener("click", function () {
  let currentAcc = JSON.parse(localStorage.getItem("currentAcc"));
  title.textContent = `All Transaction Done By ${currentAcc.accName}`;
  mainSection.classList.remove("hidden");
  let deposits = [];
  currentAcc.transactions.forEach(function (amt) {
    if (amt > 0) {
      deposits.push(amt);
    }
  });
  let arr = deposits;
  console.log(arr);
  let sum = 0;
  for (let n of arr) {
    sum = sum + n;
  }
  console.log(sum);
  amount.classList.remove("hidden");
  total.textContent = sum;
  displayTransaction(deposits);
});

// View Withdrawls
viewWithdrawls.addEventListener("click", function () {
  let currentAcc = JSON.parse(localStorage.getItem("currentAcc"));
  title.textContent = `All Transaction Done By ${currentAcc.accName}`;
  mainSection.classList.remove("hidden");
  let deposits = [];
  currentAcc.transactions.forEach(function (amt) {
    if (amt < 0) {
      deposits.push(amt);
    }
  });
  let arr = deposits;
  console.log(arr);
  let sum = 0;
  for (let n of arr) {
    sum = sum + n;
  }
  console.log(sum);
  console.log(deposits);
  amount.classList.remove("hidden");
  total.textContent = sum;
  displayTransaction(deposits);
});

// View Check Balance
checkBalance.addEventListener("click", function () {
  let currentAcc = JSON.parse(localStorage.getItem("currentAcc"));
  title.textContent = `All Transaction Done By ${currentAcc.accName}`;
  mainSection.classList.remove("hidden");
  let deposits = [];
  currentAcc.transactions.forEach(function (amt) {
    if (amt) {
      deposits.push(amt);
    }
  });
  let arr = deposits;
  let sum = 0;
  for (let n of arr) {
    sum = sum + n;
  }
  amount.classList.remove("hidden");
  total.textContent = sum;
  displayTransaction(deposits);
});

// Display All Transactions
function displayTransaction(transactions) {
  if (transactions.length != 0) {
    let eachTras = ``;
    transactions.forEach(function (amt, i) {
      let transacType = amt > 0 ? "Deposit" : "Withdrawl";
      let transaColor = amt > 0 ? "success" : "danger";
      eachTras += `
        <li class="list-group-item">
          <button type="button" class="btn btn-${transaColor}">
            ${transacType} <span class="badge text-bg-secondary">${i + 1}</span>
          </button>
          <span class="float-end">${amt}</span>
        </li>
      `;
    });
    document.getElementById("display-transactions").innerHTML = eachTras;
  }
}
