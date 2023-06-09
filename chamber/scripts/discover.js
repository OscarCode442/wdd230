
document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date().getTime();
    var daysPassed = 0;
  
    if (lastVisit) {
      lastVisit = parseInt(lastVisit); // Convert the stored timestamp to a number
      daysPassed = Math.round((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    }
  
    // Update last visit
    localStorage.setItem("lastVisit", currentDate);
  
    // Display days passed on the page
    var daysPassedElement = document.getElementById("lastvisited");
    if (daysPassedElement) {
      daysPassedElement.innerHTML = "Days since your last visit: " + daysPassed;
    }
  });
  