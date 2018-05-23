"use strict";

let formElementsArr = [
    {
        element:document.querySelector('input[name=firstName]'),
        type:'input',
        rules:[
            {
                isValid:function(input){return input.value.length < 3;},
                ruleElement:document.querySelector('#myForm-firstName-error li:nth-child(1)'),
                messege:'At least 3 characters long.'
            },
            {
                isValid:function(input){return input.value.length < 3;},
                ruleElement:document.querySelector('#myForm-firstName-error li:nth-child(2)'),
                messege:'At most 20 characters long.'
            },
            {
                isValid:function(input){
                    var allowedCharacters = input.value.match(/[^a-zA-Z]/g);
                    return allowedCharacters ? true : false;
                },
                ruleElement:document.querySelector('#myForm-firstName-error li:nth-child(3)'),
                messege:'Must only contain letters.'
            }
        ]
    },
    {
        element:document.querySelector('input[name=firstName]'),
        type:'input',
        rules:[
            {
                isValid:function(input){return input.value.length < 3;},
                ruleElement:document.querySelector('#myForm-firstName-error li:nth-child(1)'),
                messege:'At least 3 characters long.'
            },
            {
                isValid:function(input){return input.value.length < 3;},
                ruleElement:document.querySelector('#myForm-firstName-error li:nth-child(2)'),
                messege:'At most 20 characters long.'
            },
            {
                isValid:function(input){
                    var allowedCharacters = input.value.match(/[^a-zA-Z]/g);
                    return allowedCharacters ? true : false;
                },
                ruleElement:document.querySelector('#myForm-firstName-error li:nth-child(3)'),
                messege:'Must only contain letters.'
            }
        ]
    },
    {
        element:'link radio',
        type:'radio',
        rules:[
            {
                isValid:function(){},
                ruleElement:'link li element',
                messege:'error'
            }
        ]
    },
    {
        element:'link select',
        type:'select',
        rules:[
            {
                isValid:function(){},
                ruleElement:'link li element',
                messege:'error'
            }
        ]
    },
    {
        element:'link checkbox',
        type:'checkbox',
        rules:[
            {
                isValid:function(){},
                ruleElement:'link li element',
                messege:'error'
            }
        ]
    }
];

(function(){
    class Validation{
        constructor(arr){
            this.arr = arr
        }

        switchEl(){
            this.arr.forEach(el =>{
                if(el.type === 'input'){
                    console.log('input');
                }else if(el.type === 'select'){
                    console.log('select');
                }else if(el.type === 'checkbox'){
                    console.log('checkbox');
                }else if(el.type === 'radio'){
                    console.log('radio');
                }else{
                    console.error('ERROR type');
                }
            });
        }


    };



    console.log("-----------------------");
    //console.table(arr);
    let input = document.querySelector('input[name=firstName]');
    input.Validation = new Validation(formElementsArr);
    input.Validation.switchEl();
    console.log(input.Validation);
    console.dir(input);
})();

// {
//         element:'link input',
//         type:'input',
//         rules:[
//             {
//                 isValid:function(){},
//                 ruleElement:'link li element',
//                 messege:'error'
//             }
//         ]
//     },
//     {
//         element:'link select',
//         type:'select',
//         rules:[
//             {
//                 isValid:function(){},
//                 ruleElement:'link li element',
//                 messege:'error'
//             }
//         ]
//     },
//     {
//         element:'link checkbox',
//         type:'checkbox',
//         rules:[
//             {
//                 isValid:function(){},
//                 ruleElement:'link li element',
//                 messege:'error'
//             }
//         ]
//     },
//     {
//         element:'link radio',
//         type:'radio',
//         rules:[
//             {
//                 isValid:function(){},
//                 ruleElement:'link li element',
//                 messege:'error'
//             }
//         ]
//     }