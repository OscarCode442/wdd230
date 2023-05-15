
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Create an array of month names
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the current date
var currentDate = new Date();

// Extract the day, month, and year from the current date
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

// Format the date string
var formattedDate = weekdays[currentDate.getDay()] + ", " + day + " " + months[month] + " " + year;
document.getElementById("date").textContent = formattedDate