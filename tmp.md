```
main();
function main() {
  console.log("main starts");
  m1(1);
  console.log("main ends");
}
function m1(i) {
  console.log(i); // 1
  if (i == 3) return;
  m1(i + 1);
  m1(i + 1);
  console.log(i); // 2
}

function m1(i) {
  console.log(i); // 3
  if (i == 3) return;
  m1(i + 1);
  m1(i + 1);
  console.log(i);
}

function m1(i) {
  console.log(i); // 3
  if (i == 3) return;
  m1(i + 1);
  m1(i + 1);
  console.log(i);
}

function m1(i) {
  console.log(i); // 2
  if (i == 3) return;
  m1(i + 1);
  m1(i + 1);
  console.log(i);
}
```
