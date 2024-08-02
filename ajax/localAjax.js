let btnTag = document.getElementById("products-btn");

let messageTag = document.getElementById("message");

// Get the display products element
let displayProductsTag = document.getElementById("display-products");

// Function to get products data
function getProductsData() {
  // 1. Create XMLHttp Request Object
  let xhr = new XMLHttpRequest();

  // 2. Create The Request
  xhr.open("GET", "products.json", true);

  // 3. Send The Request To Server
  xhr.send();

  // In between sending request and getting response it may take some time
  xhr.onprogress = function () {
    messageTag.innerText = "Data Loading...";
  };

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    let { productsArray } = data;
    console.log(productsArray);

    messageTag.innerText = "Data Loaded!!!";
    display(productsArray);
  };
}

function display(productsArray) {
  let html = "";
  productsArray.forEach((product) => {
    console.log(product.img);
    html += `
      <div class="col-md-4">
        <img style="object-fit: contain;" src="${product.img}">
        <h4>${product.name}</h4>
        <p>Price: ₹${product.price}</p>
        <p>Quantity: ${product.qty}</p>
      </div>
    `;
  });
  displayProductsTag.innerHTML = html;
}

btnTag.addEventListener("click", getProductsData);
