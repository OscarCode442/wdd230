
function toggleMenu(){
    // Use const for variables that won't change
    const navList = document.querySelector("#nav-list"); // Use querySelector with CSS selector
    const navButton = document.querySelector("#navigation-button"); // Use querySelector with CSS selector
    navList.classList.toggle("open");
    navButton.classList.toggle("open");
  }
  
  const switchToX = document.querySelector("#navigation-button"); // Use querySelector with CSS selector
  switchToX.onclick = toggleMenu;
  
  // Use const for variables that won't change
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Use const for variables that won't change
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // Use const for variables that won't change
  const currentDate = new Date();
  
  // Use let for variables that can change
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  
  // Use template literals to format the date string
  let formattedDate = `${weekdays[currentDate.getDay()]}, ${day} ${months[month]} ${year}`;
  document.querySelector("#header-fulldate").innerText = formattedDate; // Use querySelector with CSS selector and innerText to set the text content
  