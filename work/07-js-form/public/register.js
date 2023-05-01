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




    let strEmail1;
    let strEmail2;
    let isInvalid = true ;
    var lenName;
    var lenEmail1;
    var lenEmail2


    const Error_name = document.querySelector('.register-name_error'); 
    const Valid_name = document.querySelector('.register_name'); 
    const Error_email1 = document.querySelector('.register-email1_error'); 
    const Valid_email1 = document.querySelector('.email1'); 
    const Error_email2 = document.querySelector('.register-email2_error'); 
    const Valid_email2 = document.querySelector('.email2'); 

    const NameBorder = document.querySelector('.register_label'); 
    const Email1Border = document.querySelector('.email_label1'); 
    const Email2Border = document.querySelector('.email_label2'); 

    const form = document.querySelector('.register'); 
    

    Valid_name.addEventListener('input', (event) => {
        lenName=event.target.value.length;

        if((lenName<10)&&(lenName>0)){
            Error_name.classList.remove('register-name--invalid');
            NameBorder.classList.remove('register_label--border');
        }
        else{
            Error_name.classList.add('register-name--invalid');
            NameBorder.classList.add('register_label--border');
            isInvalid = true;  
        }
    });

    Valid_email1.addEventListener('input', (event) => {
        strEmail1=event.target.value;
        lenEmail1=event.target.value.length;
        if(lenEmail1){
            Error_email1.innerText="";
            Email1Border.classList.remove('email_label1--border');
            isInvalid = false;
        }
        else{
            Error_email1.innerText="This field is required and cannot be empty";
            Email1Border.classList.add('email_label1--border');
            isInvalid = true;  
        }
    });

    Valid_email2.addEventListener('input', (event) => {
        strEmail2=event.target.value;
        lenEmail2=event.target.value.length;
        if((strEmail2==strEmail1)&&(lenEmail2!=0)){
            Error_email2.innerText="";
            Email2Border.classList.remove('email_label2--border');
            isInvalid = false;
        }
        else{
            Error_email2.innerText="This field must match the email and cannot be empty";
            Email2Border.classList.add('email_label2--border');
            isInvalid = true;  
        }
    });


    form.addEventListener('submit', (event) => { 
        if( isInvalid ) {
            event.preventDefault(); 
        }
    })

})();