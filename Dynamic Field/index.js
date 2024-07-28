const labelInput = document.getElementById("label");
const typeInput = document.getElementById("type");
const submitButton = document.querySelector('button[type="submit"]');
const outputContainer = document.getElementById("output");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const labelValue = labelInput.value;
  const typeValue = typeInput.value;

  const labelElement = document.createElement("label");
  labelElement.setAttribute("for", labelValue);
  labelElement.textContent = labelValue;

  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", typeValue);
  inputElement.setAttribute("id", labelValue);
  inputElement.classList.add("form-control");

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");
  formGroup.appendChild(labelElement);
  formGroup.appendChild(inputElement);

  outputContainer.appendChild(formGroup);
});
