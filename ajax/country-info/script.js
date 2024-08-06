function makeAjaxCall(country) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`, true);
  xhr.send();
  return xhr;
}

function displayCountry(data) {
  let html = `
  <div class="col-md-3">
        <div class="card">
            <div class="card-header">
              <img src=${data.flags.png} alt="" class="img-fluid" />
            </div>
            <div class="card-body text-center">
              <h1>${data.name.common}</h1>
              <h1>${(data.population / 1000000).toFixed(2)} M</h1>
              <h1>${data.capital[0]}</h1>
            </div>
          </div>
          </div>
    `;
  document.getElementById("country-info").insertAdjacentHTML("beforeend", html);
}

function getData() {
  let req_1 = makeAjaxCall("bharat");
  req_1.addEventListener("load", function () {
    let getCountry = JSON.parse(req_1.responseText);
    let [data] = getCountry;
    console.log(data);
    displayCountry(data);

    let req_2 = makeAjaxCall("usa");

    req_2.addEventListener("load", function () {
      let getCountry = JSON.parse(req_2.responseText);
      let [data] = getCountry;
      console.log(data);
      displayCountry(data);

      let req_3 = makeAjaxCall("pak");

      req_3.addEventListener("load", function () {
        let getCountry = JSON.parse(req_3.responseText);
        let [data] = getCountry;
        console.log(data);
        displayCountry(data);

        let req_4 = makeAjaxCall("afg");

        req_4.addEventListener("load", function () {
          let getCountry = JSON.parse(req_4.responseText);
          let [data] = getCountry;
          console.log(data);
          displayCountry(data);
        });
      });
    });
  });
}
getData();
