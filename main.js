//function expression to select elements
//(s) is  a perimeter
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".side-nav-link");




//on click, the class changes to the one specified in the brackets
selectElement(".menu-button").addEventListener("click",()=>{
    selectElement(".side-nav-list").classList.toggle("active");
    selectElement(".menu-button").classList.toggle("toggle")

    //index->specifies the delay time for each link
    //if animation exists,set it as an empty string else use the animation navaLinkAnimate specified in the main.css 
    //then divide the index by 7 for a smoother and slower delay.

    navLinks.forEach((link,index) => {
        // console.log(index)
        if (link.style.animation){
        link.style.animation=""
    }else{
        link.style.animation = ` sidenavLinkAnimation 0.5s ease forwards ${ index/7 + 0.5}s`
        // console.log(index/7 + 0.5)
    }
    })
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