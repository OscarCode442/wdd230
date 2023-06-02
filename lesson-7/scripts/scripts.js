window.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('img');
  
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    var callback = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          var src = img.getAttribute('data-src');
  
          img.setAttribute('src', src);
          img.onload = function () {
            img.style.opacity = '1';
          };
  
          observer.unobserve(img);
        }
      });
    };
  
    var observer = new IntersectionObserver(callback, options);
  
    images.forEach(function (img) {
      observer.observe(img);
    });
  });