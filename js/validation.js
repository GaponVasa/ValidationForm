"use strict";
let validationMyForm = (function(){
	let formLink;
	let elementsObject;
	const VALUE_ERROR = 'value-error';

	let insertAfter = function(elem, refElem) {
		var parent = refElem.parentNode;
		var next = refElem.nextSibling;
		if (next) {
			return parent.insertBefore(elem, next);
		} else {
			return parent.appendChild(elem);
		}
	}

	let formSetUp = function(link, Obj) {
		formLink = link;
		//console.log('formLink',formLink);
		elementsObject = Obj;
		//console.log('elementsObject',elementsObject);
		let arrKeys = Object.keys(elementsObject);
		//console.log('arrKeys',arrKeys);
		
		arrKeys.forEach(el =>{
			let ul = document.createElement('ul');
			let errorIdName = elementsObject[el].name + '-error';
			//ul.className = 'value-error';
			ul.setAttribute('id', errorIdName);
			ul.setAttribute('class', VALUE_ERROR);
			let li;
			//console.log('elementsObject[el].type', elementsObject[el].type)
            elementsObject[el].rules.forEach(el1 =>{
            	li = document.createElement('li');
            	//console.log('el1', el1); 
            	li.innerHTML += el1.messege;
            	ul.appendChild(li);
            });
            //console.log('ul', ul);
            insertAfter(ul, elementsObject[el].siblingErrorElement);
		})
	}



    // console.log("-----------------------");
    //console.table(arr)
    // console.log(input.Validation);
    // console.dir(input);
    return{
    	setUp: formSetUp,
    	// start: startValidation
    }
})();