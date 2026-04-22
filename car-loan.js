/*
Kevin Garcia-Nanez - Javascript Popup Loan Esimate 
*/

document.addEventListener("DOMContentLoaded", function () {

  // Get elements from the page
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");
  const financePopup = document.getElementById("financePopup");
  const calculateBtn = document.getElementById("calculateBtn");
  const monthlyPayment = document.getElementById("monthlyPayment");

  // Safety check | bro please  work
  if (!openPopup || !closePopup || !financePopup) {
  console.log("Popup not working");
}

  // Open popup
  openPopup.addEventListener("click", () => {
    financePopup.classList.add("show");
    financePopup.setAttribute("aria-hidden", "false");
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    financePopup.classList.remove("show");
    financePopup.setAttribute("aria-hidden", "true");
  });

  // Calculate monthly payment
  calculateBtn.addEventListener("click", () => {
    const price = 45999;

    const annualRate = parseFloat(document.getElementById("interestRate").value);
    const years = parseInt(document.getElementById("loanYears").value);

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    let payment;

    if (monthlyRate === 0) {
      payment = price / numberOfPayments;
    } else {
      payment =
        (price * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    monthlyPayment.textContent =
      "Estimated Monthly Payment: $" + payment.toFixed(2);
  });

});