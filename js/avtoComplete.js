"use strict";

let objGood ={
	addressCity:"Kharkiv",
	addressCountry:"UA",
	addressLine1:"Jasminova",
	addressLine2:"100/4",
	addressPostalCode:"123434",
	addressRegion:"Kharkivska",
	birthdayDay:"1",
	birthdayMonth:"January",
	birthdayYear:"2017",
	contact:"email",
	email:"hapon.vasa@ukraine.com",
	firstName:"Vasyl",
	flag:false,
	gender:"male",
	lastName:"Hapon",
	password:"DFR45ty7",
	telephone:"+1234567890"
};

//console.log('');
let button = document.getElementById('auto');
let formMy = document.forms.firstForm;
let elementsName = formMy.querySelectorAll('[name]');
//console.dir(elementsName)
let keys = Object.keys(objGood);

button.addEventListener('click', function(){
	elementsName.forEach(el =>{
		let name = el.name;
		let key;
		keys.some((el,ind) =>{
			if(el === name){
				key = ind;
				return true;
			};
		});

		if(el.tagName === 'INPUT'){
			if(el.type === 'radio' || el.type === 'checkbox'){
				if(name === keys[key] && el.value === objGood[name]){
					el.checked = true;
				};
			}else{
				if(name === keys[key]){
					el.value = objGood[name];
				};
			}
		}else if(el.tagName === 'SELECT'){
			if(name === keys[key]){
				el.value = objGood[name];
			};
		};
	});
	
});