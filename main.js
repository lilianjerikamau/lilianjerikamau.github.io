//function expression to select elements
//(s) is  a parameter
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".side-nav-link");




//on click, the class changes to the one specified in the brackets
selectElement(".menu-button").addEventListener("click",()=>{
    selectElement(".side-nav-list").classList.toggle("active");
    selectElement(".menu-button").classList.toggle("toggle")

    //index->specifies the delay time for each link
    //if animation exists,set it as an empty string else use the animation navaLinkAnimate specified in the main.css 
    //then divide the index by 7 for a smoother and slower delay.

    navLinks.forEach((link, index) => {
        // console.log(index)
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = ` sidenavLinkAnimation 0.5s ease forwards ${index / 7 + 0.5}s`
            // console.log(index/7 + 0.5)
        }
    });
});


window.addEventListener("load", function() {
    function showSlide(slideshowId) {
      var slideshow = document.getElementById(slideshowId);
      var slides = slideshow.getElementsByClassName("slide");
      var currentSlide = 0;
  
      function displaySlide() {
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[currentSlide].style.display = "block";
        currentSlide++;
        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
        setTimeout(displaySlide, 2000); // Change slide every 2 seconds
      }
  
      displaySlide();
    }
  
    showSlide("slideshow1");
    showSlide("slideshow2");
    showSlide("slideshow3");
    showSlide("slideshow4");
  });
  

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");
        
        navLinks.forEach((link, index) => {
            // console.log(index)
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `sidenavLinkAnimation 0.5s ease forwards ${index / 7 + 0.5}s`
                // console.log(index/7 + 0.5)
            }
        })
    })
})