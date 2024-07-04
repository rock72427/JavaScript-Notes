main();
function main() {
  add(1, 2);
  add(10, 20, 30, 1, 2, 3);
}
function add(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(`Sum = ${sum}`);
}
