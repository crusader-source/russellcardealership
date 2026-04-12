/*
Name: Your Name
Course: Your Course Name
Assignment: JavaScript Project
Date: April 12, 2026
Description: This script displays a random customer quote
for Russell's Garage when the user clicks a button.
*/

const quotes = [
  "Russell's Garage made buying my first car simple and stress-free.",
  "The staff was honest, helpful, and easy to work with.",
  "I found a reliable used car at a fair price.",
  "Great service and a smooth buying experience from start to finish.",
  "The inventory was easy to browse, and I found exactly what I wanted."
];

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
