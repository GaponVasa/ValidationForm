"use strict";
console.log('validation.js');
let validationMyForm = (function(){
	let formLink;
	let elementsObject;
	const VALUE_ERROR = 'value-error';

	let startValidation = (link, arr) =>{
		// console.log('formLink', formLink);
		// console.log('elementsObject', elementsObject);
		formLink = link;
		elementsObject = arr;
		// console.log('formLink', formLink);
		// console.log('elementsObject', elementsObject);

		erorSetUp();
		registerListeners();
	};

	let insertAfter = function(elem, refElem) {
		var parent = refElem.parentNode;
		var next = refElem.nextSibling;
		if (next) {
			return parent.insertBefore(elem, next);
		} else {
			return parent.appendChild(elem);
		};
	};


	//formSetUp - ця функція вставляє правила заповнення форми для кожного елементу згідно масиву formElementsObj
	let erorSetUp = function() {
		elementsObject.forEach(el =>{
			let ul = document.createElement('ul');
			let errorIdName = el.name + '-error';
			ul.setAttribute('id', errorIdName);
			ul.setAttribute('class', VALUE_ERROR);
			let li;
			//console.log('elementsObject[el].type', elementsObject[el].type)
            el.rules.forEach(el1 =>{
            	li = document.createElement('li');
            	//console.log('el1', el1); 
            	li.innerHTML += el1.messege;
            	ul.appendChild(li);
            });
            //console.log('ul', ul);
            insertAfter(ul, el.siblingErrorElement);
		});
	};

	let registerListeners = () =>{

		formLink.addEventListener('keyup',function(event){
			let target = event.target;
			if(target.tagName === 'INPUT' && target.type !== 'radio' || target.type !== 'checkbox'){
				console.dir(target.type);
				validationInput(target)
			};
		}, true);

		formLink.addEventListener('click',function(event){
			let target = event.target;
			if(target.type === 'radio' || target.type === 'checkbox'){
				//console.dir("target.type = ",target.type);
				if(target.type === 'radio'){
					//console.dir('radio');
					validation();
				}else if(target.type === 'checkbox'){
					//console.dir('checkbox');
					validationInput();
				};
			};
		}, true);

		formLink.addEventListener('blur',function(event){
			let target = event.target;
			if(target.tagName === 'SELECT'){
				//console.dir(target.name);
				validation();
			};
		}, true);

		formLink.addEventListener('submit',function(event){
			//let target = event.target;
			console.log('submit');
			alert('ok');
		});
	};

	let findArrElement = (targetName) =>{
		let index;
		elementsObject.some((el, ind) =>{
			//console.log(ind);
			if(el.name === targetName){
				index = ind;
				return true;
			};
		});
		return elementsObject[index];
	};

	let validation = (inputElement)=>{
		let nameElement = inputElement.name;
		let linkToObj = findArrElement(nameElement);
		let ruleElement;
		//console.log('linkToObj', linkToObj);
		linkToObj.rules.forEach((el,ind) =>{
			//console.log("ind", ind, " = " ,el.isValid(inputElement));
			
			//console.dir( el);
			ruleElement = el.ruleElement();
			//console.log( el.ruleElement());
			//console.log("ruleElement.classList", ruleElement.classList);
			if(el.isValid(inputElement)){
				ruleElement.classList.add('valid');
				ruleElement.classList.remove('invalid');
			}else{
				ruleElement.classList.add('invalid');
				ruleElement.classList.remove('valid');
			}
		});
	};

	// let validationCheck = (checkElement)=>{
	// 	let nameElement = checkElement.name;
	// 	let linkToObj = findArrElement(nameElement);
	// 	let ruleElement;
	// };
		

    // console.log("-----------------------");
    //console.table(arr)
    // console.log(input.Validation);
    // console.dir(input);
    return{
    	start: startValidation
    	// start: startValidation
    }
})();