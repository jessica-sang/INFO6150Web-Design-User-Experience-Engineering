"use strict";
(function(){
    
    const hamburgerMenu = document.querySelector(".hamburger__menu");
    const navigationMenu = document.querySelector(".nav_menu");
    
    hamburgerMenu.addEventListener("click",()=>{
            hamburgerMenu.classList.toggle("active");
            navigationMenu.classList.toggle("active");
        })

    document.querySelectorAll(".nav__link").forEach(n=>n.addEventListener("click",()=>{
        hamburgerMenu.classList.toggle("active");
        navigationMenu.classList.toggle("active");
    }))
    
})();