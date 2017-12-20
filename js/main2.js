"use strict";

let validateForm = (function(arr){
    







    console.log("-----------------------");

    let init =()=>{
        let form;
        console.log(arr);
        arr.forEach(el =>{
            console.log(el);
            if(el.form){
                form = el.form;
            };

        });
    };

   

    return{
        start: init
    };
})([
    {form: document.getElementById('myForm')},
    {
        link:document.querySelector('input[name=firstName]'),
        type:'text',
        pattern:/\9/,
        errorLink:document.getElementById('myForm-firstName-error'),
        errorMessage:'myForm-firstName-error'
    },
    {
        link:document.querySelector('input[name=lastName]'),
        type:'text',
        pattern:/\9/,
        errorLink:document.getElementById('myForm-lastName-error'),
        errorMessage:'myForm-lastName-error'
    },
    {
        link:document.querySelector('input[name=email]'),
        type:'email',
        pattern:/\9/,
        errorLink:document.getElementById('myForm-email-error'),
        errorMessage:'myForm-email-error'
    },
    {
        link:document.querySelector('input[name=telephone]'),
        type:'telephone',
        pattern:/\9/,
        errorLink:document.getElementById('myForm-telephone-error'),
        errorMessage:'myForm-telephone-error'
    },
    {
        link:document.querySelectorAll('input[name=sex]'),
        type:'radio',
        pattern:'!empty',
        errorLink:document.getElementById('myForm-sex-error'),
        errorMessage:'myForm-sex-error'
    },
    {
        link:document.getElementById('country'),
        type:'select',
        pattern:'!empty',
        errorLink:document.getElementById('myForm-addres-country'),
        errorMessage:'myForm-addres-country'
    },
    {
        link:document.querySelectorAll('input[type=checkbox]'),
        type:'checkbox',
        pattern:'!empty',
        errorLink:document.getElementById('myForm-check-contact'),
        errorMessage:'myForm-check-contact'
    },
    // {
    //     link:,
    //     type:,
    //     pattern:,
    //     errorLink:document.getElementById(''),
    //     errorMessage:
    // }
]);

validateForm.start();

//document.body.addEventListener('click', validateForm.start);

//validateForm();
