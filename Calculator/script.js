const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

function updateDisplay(value) {
  display.value = value;
  display.focus();
  display.selectionStart = display.value.length;
  display.selectionEnd = display.value.length;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value) || value === ".") {
      updateDisplay(display.value + value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (
        display.value &&
        !["+", "-", "*", "/"].includes(display.value.slice(-1))
      ) {
        updateDisplay(display.value + value);
      }
    } else if (value === "=") {
      try {
        const result = eval(display.value);
        updateDisplay(result);
      } catch (error) {
        updateDisplay("Error");
      }
    } else if (value === "AC") {
      updateDisplay("");
    } else if (value === "DEL") {
      updateDisplay(display.value.slice(0, -1));
    } else if (value === "%") {
      try {
        const percentage = parseFloat(display.value) / 100;
        updateDisplay(percentage);
      } catch (error) {
        updateDisplay("Error");
      }
    }
  });
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (!isNaN(event.key) || event.key === ".") {
    updateDisplay(display.value + event.key);
  } else if (["+", "-", "*", "/"].includes(event.key)) {
    if (
      display.value &&
      !["+", "-", "*", "/"].includes(display.value.slice(-1))
    ) {
      updateDisplay(display.value + event.key);
    }
  } else if (event.key === "Enter") {
    try {
      const result = eval(display.value);
      updateDisplay(result);
    } catch (error) {
      updateDisplay("Error");
    }
  } else if (event.key === "Backspace") {
    updateDisplay(display.value.slice(0, -1));
  }
});
display.focus();
