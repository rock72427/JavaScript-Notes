// Producing Code
let p1 = new Promise(function (resolve, reject) {
  let fetchData = true;
  if (fetchData) resolve([1, 2, 3, 4, 5]);
  else reject("Something went wrong!!!");
});
// Consuming Data
p1.then((data) => {
  console.log(data);
});

p1.catch((err) => {
  console.error(err);
});
