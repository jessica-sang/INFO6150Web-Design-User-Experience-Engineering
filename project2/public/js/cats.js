"use strict";
(function(){
    
    const modalE1 = document.querySelector(".modal");
    const openE1 = document.querySelector(".open1");
    const closeE1= document.querySelector(".close");

    openE1.addEventListener('click',() => {
        modalE1.showModal();
    });
    closeE1.addEventListener('click',() => {
        modalE1.close();
    });
    
    const openE2 = document.querySelector(".open2");
    openE2.addEventListener('click',() => {
        modalE1.showModal();
    });

    const openE3 = document.querySelector(".open3");
    openE3.addEventListener('click',() => {
        modalE1.showModal();
    });

    const openE4 = document.querySelector(".open4");
    openE4.addEventListener('click',() => {
        modalE1.showModal();
    });

    const openE5 = document.querySelector(".open5");
    openE5.addEventListener('click',() => {
        modalE1.showModal();
    });

    const openE6 = document.querySelector(".open6");
    openE6.addEventListener('click',() => {
        modalE1.showModal();
    });

  
    let strEmail1;
    let strEmail2;
    let isInvalid = true ;
    var lenEmail1;
    var lenEmail2

    const email1Error = document.querySelector('.register-email1__error'); 
    const email1Find = document.querySelector('.email1'); 
    const email2Error = document.querySelector('.register-email2__error'); 
    const email2Find = document.querySelector('.email2'); 

    const form = document.querySelector('.subscribe'); 
    

    email1Find.addEventListener('input', (event) => {
        strEmail1=event.target.value;
        lenEmail1=event.target.value.length;
        if(lenEmail1!=0){
            email1Error.innerText="";
            email1Find.classList.remove('email__label1--border');
            isInvalid = false;
        }
        else{
            email1Error.innerText="This field is required , cannot be empty";
            email1Find.classList.add('email__label1--border');
            isInvalid = true;  
        }
    });

    email2Find.addEventListener('input', (event) => {
        strEmail2=event.target.value;
        lenEmail2=event.target.value.length;

        if((strEmail2==strEmail1)&&(lenEmail2!=0)){
            email2Error.innerText="";
            email2Find.classList.remove('email__label2--border');
            isInvalid = false;
        }
        else{
            email2Error.innerText="This field must match the email, cannot be empty";
            email2Find.classList.add('email__label2--border');
            isInvalid = true;  
        }
    });


    form.addEventListener('submit', (event) => { 

    if(document.getElementById("email1").value==document.getElementById("email2").value){
        if(document.getElementById("email1").value.indexOf("@")!=-1)
        {
            if(document.getElementById("email2").value.indexOf("@")!=-1)
            {
                email2Error.innerText="";
                email1Error.innerText="";
            }
            else{
                email2Error.innerText="you should contain @";
                email2Find.classList.add('email__label2--border');
                event.preventDefault(); 

            }
        }
        else{
            email1Error.innerText="you should contain @";
            email1Find.classList.add('email__label1--border');
            event.preventDefault(); 
        }
    }
    else{
        email2Error.innerText="This field must match the email";
        email2Find.classList.add('email__label2--border');
        event.preventDefault(); 
    }
});

})();