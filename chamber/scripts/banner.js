

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    
    // Check if the current day is Monday (1) or Tuesday (2)
    if (dayOfWeek === 1 || dayOfWeek === 2) {
      displayBanner();
    }
    
    function displayBanner() {
      var banner = document.querySelector('.banner');
      banner.style.display = 'block';
      
      var closeButton = document.querySelector('.banner-close');
      closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
      });
    }
  });