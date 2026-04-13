/*
Name: Kevin Nanez
Course: Introduction to Web Systems
Assignment: JavaScript Project
Date: April 12, 2026
Description: Financing popup for car details page that calculates estimated monthly payment.
*/

// Get elements from the page
const openPopup = document.getElementById("openPopup"); // Button to open popup
const closePopup = document.getElementById("closePopup"); // Button to close popup
const financePopup = document.getElementById("financePopup"); // Popup container
const calculateBtn = document.getElementById("calculateBtn"); // Calculate button
const monthlyPayment = document.getElementById("monthlyPayment"); // Output text

// =========================
// OPEN POPUP
// =========================
openPopup.addEventListener("click", () => {
  // Add class to show popup
  financePopup.classList.add("show");

  // Update accessibility attribute
  financePopup.setAttribute("aria-hidden", "false");
});

// =========================
// CLOSE POPUP
// =========================
closePopup.addEventListener("click", () => {
  // Remove class to hide popup
  financePopup.classList.remove("show");

  // Update accessibility attribute
  financePopup.setAttribute("aria-hidden", "true");
});

// =========================
// CALCULATE MONTHLY PAYMENT
// =========================
calculateBtn.addEventListener("click", () => {

  // Fixed vehicle price (can later be dynamic)
  const price = 25000;

  // Get user input values
  const annualRate = parseFloat(document.getElementById("interestRate").value); // interest %
  const years = parseInt(document.getElementById("loanYears").value); // loan term

  // Convert annual rate to monthly rate
  const monthlyRate = annualRate / 100 / 12;

  // Total number of payments (months)
  const numberOfPayments = years * 12;

  let payment;

  // If interest rate is 0 (simple division)
  if (monthlyRate === 0) {
    payment = price / numberOfPayments;
  } else {
    // Loan payment formula
    payment =
      (price * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  // Display result with 2 decimal places
  monthlyPayment.textContent =
    "Estimated Monthly Payment: $" + payment.toFixed(2);
});