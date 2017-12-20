"use strict";
(function(){
	let obj = getSetLocalStorage.getLS('myValidFormInfo');
	let keys = Object.keys(obj);
	let divContainer = document.createElement('div');
	let targetElement = document.getElementById('pointIn');
	keys.forEach(el =>{
		if(el !== 'flag'){
			divContainer.innerHTML += `<div >${el} : ${obj[el]}</div>`;
		}
	});
	targetElement.appendChild(divContainer);
})();