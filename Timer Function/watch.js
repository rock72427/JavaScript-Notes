let minTag = document.getElementById("min");
let secTag = document.getElementById("sec");
let mSecTag = document.getElementById("m-sec");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

let min = 0;
let sec = 0;
let mSec = 0;
let flag = true;

function timer() {
  mSec += 10;

  if (mSec === 1000) {
    sec += 1;
    mSec = 0;
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
  }

  minTag.innerText = concatZero(min);
  secTag.innerText = concatZero(sec);
  mSecTag.innerText = concatZero(mSec);
}

let interval = null;
startBtn.addEventListener("click", function () {
  if (flag) {
    interval = setInterval(timer, 10);
    flag = false;
  }
});

stopBtn.addEventListener("click", function () {
  if (!flag) {
    clearInterval(interval);
    flag = true;
  }
});

resetBtn.addEventListener("click", function () {
  min = 0;
  sec = 0;
  mSec = 0;
  minTag.innerText = "00";
  secTag.innerText = "00";
  mSecTag.innerText = "00";
  clearInterval(interval);
  flag = true;
});

function concatZero(time) {
  if (time <= 9) return "0" + time;
  else return time;
}
