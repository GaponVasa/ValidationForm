"use strict";

let formElementsObj = [
    {
        element:document.querySelector('input[name=firstName]'),
        name: 'firstName',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=firstName]'),
        rules:[
            {
                isValid: function(input){return input.value.length === 0},
                ruleElement: document.querySelector('#email-error li:nth-child(1)'),
                messege: 'Not empty.'
            },
            {
                isValid: function(input){return input.value.length < 3;},
                ruleElement: document.querySelector('#firstName-error li:nth-child(1)'),
                messege: 'At least 3 characters long.'
            },
            {
                isValid: function(input){return input.value.length > 20;},
                ruleElement: document.querySelector('#firstName-error li:nth-child(2)'),
                messege: 'At most 20 characters long.'
            },
            {
                isValid: function(input){
                    var allowedCharacters = input.value.match(/[^a-zA-Z]/g);
                    return allowedCharacters ? true : false;
                },
                ruleElement: document.querySelector('#firstName-error li:nth-child(3)'),
                messege: 'Must only contain letters.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=lastName]'),
        name: 'lastName',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=lastName]'),
        rules:[
            {
                isValid: function(input){return input.value.length === 0},
                ruleElement: document.querySelector('#email-error li:nth-child(1)'),
                messege: 'Not empty.'
            },
            {
                isValid: function(input){return input.value.length < 3;},
                ruleElement: document.querySelector('#lastName-error li:nth-child(1)'),
                messege: 'At least 3 characters long.'
            },
            {
                isValid: function(input){return input.value.length > 20;},
                ruleElement: document.querySelector('#lastName-error li:nth-child(2)'),
                messege: 'At most 20 characters long.'
            },
            {
                isValid:function(input){
                    var allowedCharacters = input.value.match(/[^a-zA-Z]/g);
                    return allowedCharacters ? true : false;
                },
                ruleElement: document.querySelector('#lastName-error li:nth-child(3)'),
                messege: 'Must only contain letters.'
            }
        ]
    },
    {
        element: document.querySelector('input[name=gender]'),
        name: 'gender',
        type: 'radio',
        siblingErrorElement: document.querySelector('input[name=gender]').parentElement.parentElement,
        rules:[
            {
                isValid:function(){return document.querySelectorAll('input[name=gender]').forEach(el => {if(el.checked === true){return true}})},
                ruleElement:document.querySelector('#gender-error li:nth-child(1)'),
                messege:'Choose your gender.'
            }
        ]
    },
    {
        element:document.querySelector('select[name=birthday]'),
        name: 'birthday',
        type: 'select',
        siblingErrorElement: document.querySelector('select[name=birthday]').parentElement.parentElement,
        rules:[
            {
                isValid:function(){return document.querySelectorAll('input[name=birthday]')[0].value===""?true:false},
                ruleElement:document.querySelector('#birthday-error li:nth-child(1)'),
                messege:'Select yours birthday Day.'
            },
            {
                isValid:function(){return document.querySelectorAll('input[name=birthday]')[1].value===""?true:false},
                ruleElement:document.querySelector('#birthday-error li:nth-child(2)'),
                messege:'Select yours birthday Month.'
            },
            {
                isValid:function(){return document.querySelectorAll('input[name=birthday]')[2].value===""?true:false},
                ruleElement:document.querySelector('#birthday-error li:nth-child(3)'),
                messege:'Select yours birthday Year.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=email]'),
        name: 'email',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=email]'),
        rules:[
            {
                isValid: function(input){return input.value.length === 0},
                ruleElement: document.querySelector('#email-error li:nth-child(1)'),
                messege: 'Not empty.'
            },
            {
                isValid: function(input){return input.value.length < 6},
                ruleElement: document.querySelector('#email-error li:nth-child(2)'),
                messege: 'At least 6 characters long.'
            },
            {
                isValid:function(input){return input.value.length > 100},
                ruleElement: document.querySelector('#email-error li:nth-child(3)'),
                messege: 'At most 100 characters long.'
            },
            {
                isValid:function(input){
                    var allowedCharacters = input.value.match(/@/g);
                    return allowedCharacters ? true : false;
                },
                ruleElement: document.querySelector('#email-error li:nth-child(4)'),
                messege: 'Contains a special character @.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=telephone]'),
        name: 'telephone',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=telephone]'),
        rules:[
            {
                isValid: function(input){return input.value.length === 0},
                ruleElement: document.querySelector('#telephone-error li:nth-child(1)'),
                messege: 'Not empty.'
            },
            {
                isValid: function(input){
                    var allowedCharacters = input.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g);
                    return allowedCharacters ? true : false;
                },
                ruleElement: document.querySelector('#telephone-error li:nth-child(2)'),
                messege: 'Format (123)456-7890 or +1234567890.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=addressLine1]'),
        name: 'addressLine1',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=addressLine1]'),
        rules:[
            {
                isValid: function(input){return input.value.length === 0},
                ruleElement: document.querySelector('#addressLine1-error li:nth-child(1)'),
                messege: 'Not empty.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=addressLine2]'),
        name: 'addressLine2',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=addressLine2]'),
        rules:[
            {
                isValid: function(input){return input.value.length === 0},
                ruleElement: document.querySelector('#addressLine2-error li:nth-child(1)'),
                messege: 'Not empty.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=addressCity]'),
        name: 'addressCity',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=addressCity]'),
        rules:[
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#addressCity-error li:nth-child(1)'),
                messege: 'Not empty.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=addressRegion]'),
        name: 'addressRegion',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=addressRegion]'),
        rules:[
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#addressRegion-error li:nth-child(1)'),
                messege: 'Not empty.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=addressPostalCode]'),
        name: 'addressPostalCode',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=addressPostalCode]'),
        rules:[
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#addressPostalCode-error li:nth-child(1)'),
                messege: 'Not empty.'
            },
            {
                isValid: function(input){
                    var allowedCharacters = input.value.match(/d/);
                    return allowedCharacters ? true : false;
                },
                ruleElement: document.querySelector('#addressPostalCode-error li:nth-child(2)'),
                messege: 'Entered are several digits of the postal code.'
            }
        ]
    },
    {
        element:document.querySelector('select[name=addressCountry]'),
        name: 'addressCountry',
        type: 'select',
        siblingErrorElement:document.querySelector('select[name=addressCountry]'),
        rules:[
            {
                isValid:function(){return select.value===""?true:false},
                ruleElement:document.querySelector('#addresCountry-error li:nth-child(1)'),
                messege:'Selected yours country.'
            }
        ]
    },
    {
        element:document.querySelectorAll('input[name=contact]'),
        name: 'contact',
        type: 'checkbox',
        siblingErrorElement: document.querySelector('input[name=contact]').parentElement.parentElement.parentElement,
        rules:[
            {
                isValid:function(){},
                ruleElement:document.querySelector('#contact-error li:nth-child(1)'),
                messege:'One or more methods of communication are selected.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=password]'),
        name: 'password',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=password]'),
        rules:[
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#password-error li:nth-child(1)'),
                messege: 'At least 8 characters long (and less than 100 characters).'
            },
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#password-error li:nth-child(2)'),
                messege: 'Contains at least 1 number..'
            },
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#password-error li:nth-child(3)'),
                messege: 'Contains at least 1 lowercase letter.'
            },
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#password-error li:nth-child(4)'),
                messege: 'Contains at least 1 uppercase letter.'
            },
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#password-error li:nth-child(5)'),
                messege: 'Contains a special character (e.g. @ !).'
            }
        ]
    },
    {
        element:document.querySelector('input[name=passwordConfirmation]'),
        name: 'passwordConfirmation',
        type: 'input',
        siblingErrorElement: document.querySelector('input[name=passwordConfirmation]'),
        rules:[
            {
                isValid: function(input){return input.value.length !== 0},
                ruleElement: document.querySelector('#passwordConfirmation-error li:nth-child(1)'),
                messege: 'This password needs to match the first one.'
            }
        ]
    }
];