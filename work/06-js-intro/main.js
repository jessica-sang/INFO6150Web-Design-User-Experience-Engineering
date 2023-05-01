"use strict";
(function(){
    
    const buttonClick_1 = document.querySelector(".button_home");
    const buttonClick_2 = document.querySelector(".button_about");
    const buttonClick_3 = document.querySelector(".button_register");

    function whenYouClicked_1(){
        const whenButtonClick_1 = document.querySelector(".navigation_menu_1");
        whenButtonClick_1.classList.toggle("deactivate");
    }

    buttonClick_1.addEventListener("click",whenYouClicked_1);



    function whenYouClicked_2(){
        const whenButtonClick_2 = document.querySelector(".navigation_menu_2");
        whenButtonClick_2.classList.toggle("deactivate");
    }

    buttonClick_2.addEventListener("click",whenYouClicked_2);



    function whenYouClicked_3(){
        const whenButtonClick_3 = document.querySelector(".navigation_menu_3");
        whenButtonClick_3.classList.toggle("deactivate");
    }

    buttonClick_3.addEventListener("click",whenYouClicked_3);
})();