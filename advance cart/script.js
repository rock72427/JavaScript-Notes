let productFormEl = document.getElementById("form-el");
let productNameInput = document.getElementById("product-name");
let productPriceInput = document.getElementById("product-price");
let productImageInput = document.getElementById("product-img");
let checkBoxBtn = document.querySelector("input[type='checkbox']");
let quantityInput = document.getElementById("product-quantity");
let quantityField = document.getElementById("quantity-field");
let addProductBtn = document.getElementById("add-product");
let formComponent = document.getElementById("form-component");

addProductBtn.addEventListener("click", () => {
  formComponent.classList.remove("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    formComponent.classList.add("hidden");
  }
});

productFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  createProduct();
});

let checked = false;
checkBoxBtn.addEventListener("change", () => {
  checked = checkBoxBtn.checked;
  if (checked) {
    quantityField.style.display = "block";
  } else {
    quantityField.style.display = "none";
  }
});

function createProduct() {
  let productList = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  let reader = new FileReader();
  reader.onload = function (event) {
    let productObj = {
      name: productNameInput.value,
      price: productPriceInput.value,
      img: event.target.result,
      quantity: checked ? (quantityInput.value ? quantityInput.value : 1) : 0,
    };
    productList.push(productObj);
    localStorage.setItem("products", JSON.stringify(productList));
    display();
    productNameInput.value = "";
    productPriceInput.value = "";
    productImageInput.value = "";
    checked = false;
    checkBoxBtn.checked = false;
    quantityInput.value = "";
    quantityField.style.display = "none";
  };
  reader.readAsDataURL(productImageInput.files[0]);
}

function display() {
  let result = document.getElementById("result");
  let productList = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  let html = ``;
  if (productList.length > 0) {
    productList.forEach((product, index) => {
      html += `
      <div class="col-md-3">
        <div class="card">
              <div class="card-header text-center">
          <img style="height: 200px" src=${product.img} alt=${product.name} />
        </div>
        <div class="card-body">
          <h5>Name: ${product.name}</h5>
          <h5>Price: ${product.price}</h5>
          <h5>${
            product.quantity > 0
              ? "Stock is Available"
              : "Stock is not Available"
          }</h5>
          <h5>Quantity: <button class="btn btn-primary" onclick="decrementQuantity(${index})">-</button> ${
        product.quantity
      } <button class="btn btn-primary" onclick="incrementQuantity(${index})">+</button></h5>
        </div>
      </div>
    </div>
  `;
    });
    result.innerHTML = html;
  } else {
    result.innerHTML = `<p>No product available</p>`;
  }
}
function incrementQuantity(index) {
  let productList = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  productList[index].quantity++;
  localStorage.setItem("products", JSON.stringify(productList));
  display();
}

function decrementQuantity(index) {
  let productList = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  if (productList[index].quantity > 0) {
    productList[index].quantity--;
  }
  localStorage.setItem("products", JSON.stringify(productList));
  display();
}

display();
