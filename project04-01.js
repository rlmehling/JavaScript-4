/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Rebecca Mehling
      Date: 03/28/2023  

      Filename: project04-01.js
*/

"use strict";

// Global Constants
const COST_PER_LB = .50;
const COST_PER_MILE = .75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box
   
   // Step 5: Try-catch statement to test weight. 
    try {
        if (!(wgtBox.value > 0)) throw "!!Enter a positive weight"; //if weight is less than 0, throw error message 
        totalCost += wgtBox.value * COST_PER_LB; 
      } catch(error) { 
        msgBox.innerHTML = error;
        msgTotalBox.innerHTML = ""; //display error message in Total Box 
    }

   // Step 5: try-catch statement to test distance  
    try {
        if (!(distBox.value > 0)) throw "!!Enter a positive mileage"; // if distance is less than 0, throw error message 
        totalCost += distBox.value * COST_PER_MILE;
      } catch(error) {
        msgBox.innerHTML = error 
        msgTotalBox.innerHTML = ""; //display error message in Total Box 
    }   
  
   
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }