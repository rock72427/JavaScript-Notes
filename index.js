main();
function main() {
  let output_1 = add();
  console.log("Output_1 = " + output_1);

  let output_2 = add(1);
  console.log("Output_2 = " + output_2);

  let output_3 = add(1, 2);
  console.log("Output_3 = " + output_3);

  let output_4 = add(1, 2, 3);
  console.log("Output_4 = " + output_4);

  function add(a = 0, b = 0, c = 0) {
    return a + b + c;
  }
}
