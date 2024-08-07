function makeAjaxCall(country) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`, true);
    xhr.send();
    xhr.onload = function () {
      console.log(xhr);
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject("Something Wents Wrong!!!");
      }
    };
  });
}

function displayCountry(data) {
  let html = `
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-header">
                            <img src=${
                              data[0].flags.png
                            } alt="" class="img-fluid" />
                        </div>
                        <div class="card-body text-center">
                            <h1>${data[0].name.common}</h1>
                            <h1>${(data[0].population / 1000000).toFixed(
                              2
                            )} M</h1>
                            <h1>${data[0].capital[0]}</h1>
                        </div>
                    </div>
                </div>
            `;
  document.getElementById("country-info").insertAdjacentHTML("beforeend", html);
}

function getData() {
  makeAjaxCall("bharat")
    .then((data) => {
      displayCountry(data);
      return makeAjaxCall("usa");
    })
    .then((data) => {
      displayCountry(data);
      return makeAjaxCall("pak");
    })
    .then((data) => {
      displayCountry(data);
      return makeAjaxCall("afg");
    })
    .then((data) => {
      displayCountry(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

getData();
