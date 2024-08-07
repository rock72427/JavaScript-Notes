let p1 = new Promise(function (resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "content.txt", true);
  xhr.send();

  xhr.addEventListener("load", function () {
    console.log(xhr);
    if (xhr.statusText == "OK") {
      resolve(xhr.responseText);
    } else {
      reject("Something went wrong, please try again later!!!");
    }
  });
});

p1.then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
