
// Lazy load images
const lazyImages = document.querySelectorAll('.lazy');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Use dataset to access custom data attributes
        const src = img.dataset.src;

        img.src = src; // Use the src property instead of setAttribute
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  io.observe(target);
};

lazyImages.forEach(lazyLoad);
