
document.addEventListener('DOMContentLoaded', function() {
  // Use const for variables that won't change
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Use an array and includes method to check if the current day is Monday or Tuesday
  const bannerDays = [1, 2]; // Monday and Tuesday
  if (bannerDays.includes(dayOfWeek)) {
    displayBanner();
  }
  
  function displayBanner() {
    // Use const for variables that won't change
    const banner = document.querySelector('.banner');
    // Use classList and toggle to add or remove classes
    banner.classList.toggle('show');
    
    const closeButton = document.querySelector('.banner-close');
    closeButton.addEventListener('click', function() {
      // Use classList and toggle to add or remove classes
      banner.classList.toggle('show');
    });
  }
});
