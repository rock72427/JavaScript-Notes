function main() {
  var a = 10;
  function m1() {
    var b = 20;
    console.log(a);
  }
  return m1;
}
let outer = main();
outer();
console.log(a);
