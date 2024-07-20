let salaries = [20000, 30000, 40000];
salaries.forEach(function (sal, i) {
  let incSal = Math.trunc(sal / 10);
  salaries[i] = sal + incSal;
});
console.log(salaries);
