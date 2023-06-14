
document.addEventListener("DOMContentLoaded", function() {
  // Use const for variables that won't change
  const lastVisitKey = "lastVisit";
  // Use let for variables that can change
  let lastVisit = localStorage.getItem(lastVisitKey);
  let currentDate = new Date().getTime();
  let daysPassed = 0;

  if (lastVisit) {
    lastVisit = parseInt(lastVisit); // Convert the stored timestamp to a number
    daysPassed = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24)); // Use Math.floor to round down
  }

  // Update last visit
  localStorage.setItem(lastVisitKey, currentDate);

  // Display days passed on the page
  const daysPassedElement = document.getElementById("lastvisited");
  if (daysPassedElement) {
    daysPassedElement.innerText = "Days since your last visit: " + daysPassed; // Use innerText to set the text content
  }
});

