main();
function main() {
  let arr_1 = [10, 20, 30, 40, 50];
  let arr_2;
  arr_2 = arr_1;
  arr_2[2] = 200;

  console.log(arr_1[2], arr_2[2]);
}
