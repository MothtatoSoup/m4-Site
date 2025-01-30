/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Maddy
      Date:   1/30

      Filename: js02.js
 */




const EMP_COST = 100; // cost of photographers /hr
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

window.addEventListener("load", setupForm);

function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").value = false;
      document.getElementById("photoRights").value = false;
      document.getElementById("photoDist").value = 0;
}



function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
}
