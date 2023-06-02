document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Local storage: Track user's last visit
document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date().getTime();
    var daysPassed = Math.round((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

    // Update last visit
    localStorage.setItem("lastVisit", currentDate);

    // Display days passed on the page
    var daysPassedElement = document.getElementById("lastvisited");
    if (daysPassedElement) {
        daysPassedElement.innerHTML = "Days since your last visit: " + daysPassed;
    }
});