document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("fees-form");
  const courseSelect = document.getElementById("city");
  const totalFeesInput = document.getElementById("totalFees");
  const casteRadio = form.querySelectorAll("input[name='radio']");
  const concessionFeesInput = document.getElementById("concessionFees");
  const paidFeesInput = document.getElementById("paidFees");
  const dueFeesInput = document.getElementById("dueFees");
  const remainingFeesInput = document.getElementById("remainingFees");

  const courseFees = {
    MERN: 30000,
    JAVA: 31000,
    PYTHON: 32000,
  };

  const casteConcessions = {
    SC: 1000,
    ST: 2000,
  };

  courseSelect.addEventListener("change", function () {
    const selectedCourse = courseSelect.value;
    totalFeesInput.value = courseFees[selectedCourse];
  });

  casteRadio.forEach(function (radio) {
    radio.addEventListener("change", function () {
      const selectedCaste = radio.value;
      concessionFeesInput.value = casteConcessions[selectedCaste];
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const totalFees = parseInt(totalFeesInput.value, 10);
    const concessionFees = parseInt(concessionFeesInput.value, 10);
    const paidFees = parseInt(paidFeesInput.value, 10);
    const dueFees = parseInt(dueFeesInput.value, 10);
    const remainingFees = totalFees - concessionFees - paidFees;

    remainingFeesInput.value = remainingFees;
  });
});
