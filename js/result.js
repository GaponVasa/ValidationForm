"use strict";
(function(){
	let obj = getSetLocalStorage.getLS('myValidFormInfo');
	let keys = Object.keys(obj);
	let divContainer = document.createElement('div');
	let targetElement = document.getElementById('pointIn');
	const VALID_OBJ_NAME = 'myValidFormInfo';
	keys.forEach(el =>{
		if(el !== 'flag'){
			divContainer.innerHTML += `<div >${el} : ${obj[el]}</div>`;
		}
	});
	targetElement.appendChild(divContainer);
	document.getElementById('btnShow').addEventListener('click', function(){
		getSetLocalStorage.displayLS(VALID_OBJ_NAME);
	}, true);
})();