document.addEventListener("submit", function () {
  const form = document.getElementById("fees-form");
  const courseSelect = document.getElementById("course");
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
});
