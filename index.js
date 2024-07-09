function fact(n) {
  if (n <= 1) return n;
  return fact(n - 1) + fact(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fact(i));
}
