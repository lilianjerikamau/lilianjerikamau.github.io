const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".side-nav-link");

selectElement(".menu-button").addEventListener("click", () => {
    selectElement(".side-nav-list").classList.toggle("active");
    selectElement(".menu-button").classList.toggle("toggle");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `sidenavLinkAnimation 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
});

window.addEventListener("load", function() {
    const slideshowContainers = document.querySelectorAll(".slideshow-container");

    slideshowContainers.forEach((container) => {
        const slides = container.querySelectorAll(".slide");
        let currentSlideIndex = 0;

        if (slides.length > 0) {
            function cycleSlides() {
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[currentSlideIndex].style.display = "block";
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                setTimeout(cycleSlides, 2500);
            }
            cycleSlides();
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".side-nav-list").classList.remove("active");
        selectElement(".menu-button").classList.remove("toggle");
    });
});