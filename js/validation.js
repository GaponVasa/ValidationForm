"use strict";
console.log('validation.js');
let validationMyForm = (function(){
	let validObj;
	let formLink;
	let elementsObject;
	let currentLink;
	const VALUE_ERROR = 'value-error';
	

	let setValidObj = (obj)=>{
		if(!obj){
			console.error('Object!!!');
			return false;
		}else{
			 validObj = obj;
			 return true;
		};
	};

	let getValidObj = ()=>{
		return validObj};

	let startValidation = (link, arr) =>{
		formLink = link;
		elementsObject = arr;
		erorSetUp();
		registerListeners();
	};

	let feedback = function(link){
		currentLink = link;
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
				//console.dir(target.type);
				validation(target)
			};
		}, true);

		formLink.addEventListener('click',function(event){
			let target = event.target;
			if(target.type === 'radio' || target.type === 'checkbox'){
				//console.dir("target.type = ",target.type);
				if(target.type === 'radio'){
					//console.dir('radio');
					validation(target);
				}else if(target.type === 'checkbox'){
					//console.dir('checkbox');
					validation(target);
				};
			};
		}, true);

		formLink.addEventListener('blur',function(event){
			let target = event.target;
			//console.log('registerListeners()      formLink.addEventListener(blur,...)     target', target)
			if(target.tagName === 'SELECT'){
				//console.dir(target.name);
				validation(target);
			};
		}, true);

		formLink.addEventListener('submit',function(event){
			//console.log('submit');
			//console.log(elementsObject);
			//console.error('-----------------------------START_SUBMIT---------------------------------')
			elementsObject.forEach((el,ind) =>{
				validation(el.element);
			});
			//console.log('validObj', validObj)
			//console.error('-----------------------------END_SUBMIT---------------------------------')
			event.preventDefault();
			currentLink();
		});
	};

	let findArrElement = (targetName) =>{
		let index;
		//console.log('findArrElement()  targetName', targetName);
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
		//console.log('validation()           -----------------------------START---------------------------------')
		//console.log('validation()           inputElement', inputElement);
		let nameElement;
		if(Array.isArray(inputElement)){
			//console.log('validation()  inputElement[0].name', inputElement[0].name);
			nameElement = inputElement[0].name
		}else{
			nameElement = inputElement.name;
		}
		

		let linkToObj = findArrElement(nameElement);
		//console.log('linkToObj ', linkToObj);
		let ruleElement;
		let flag = true;
		//console.log('validation()           linkToObj', linkToObj);
		linkToObj.rules.forEach((el,ind) =>{
			//console.log("ind", ind, " = " ,el.isValid(inputElement));
			
			//console.dir( el);
			ruleElement = el.ruleElement();
			//console.log( el.ruleElement());
			//console.log("ruleElement.classList", ruleElement.classList);
			if(el.isValid(inputElement)){
				ruleElement.classList.add('valid');
				ruleElement.classList.remove('invalid');
				flag = flag & true;
			}else{
				ruleElement.classList.add('invalid');
				ruleElement.classList.remove('valid');
				flag = flag & false;
			};
		});
		//console.log("validation()           flag = ", flag);
		if(flag){
			if(linkToObj.name === 'birthday'){
				//console.log('validation()           linkToObj.name === birthday')
				addToObj(Array.prototype.slice.call(document.querySelectorAll('select[name=birthday]')), flag);
			}else{
				//console.log('validation()           linkToObj.name !== birthday')
				addToObj(linkToObj.element, flag);
			};
		};
		//console.log('validation()           -----------------------------END---------------------------------')
	};
	//console.log('',)

	let addToObj = function(link, flag){
		let add = function(linkOne, ind){
			//console.log('**************************add()*************************');
			//console.log('add()   linkOne ', linkOne)
			//console.dir(linkOne)
			let name = linkOne.name;
			//console.log('add()   linkOne.name ', linkOne.name)
			let type = linkOne.type;
			let value = linkOne.value;
			//console.log('add()   linkOne.type ', linkOne.type)
			//console.log('add()   linkOne.value ', linkOne.value)
			if(ind === undefined){ind = ''};
			//console.log('add()   ind ', ind)
			//console.log('add()   ind && type === select', ind !== undefined && type === 'select-one')
			//console.log('add()   ind && type === select', ind && type === 'select-one')
			if(type === 'checkbox' || type === 'radio' || (ind !== undefined && type === 'select-one')){
				//console.log('add()   ind',ind)
				if(linkOne.checked || type === 'select-one'){
					validObj[`${name}${ind+1}`] = value;
					//console.log('add()   ind',ind)
					//console.log('add()   validObj[`${name}${ind}`]', validObj[`${name}${ind}`])
				};
			}else{
				if(flag){
					validObj[`${name}`] = value;
					//console.log('add()   validObj[`${name}`]', validObj[`${name}`])
				};
				
			};
		};
		//console.log('addToObj()   link ', link);
		if(Array.isArray(link)){
			//console.log('addToObj()___________Array.isArray(link)');
			link.forEach((el, ind) =>{
				add(el, ind);
			});
		}else{
			//console.log('addToObj()___________link');
			add(link);
		};
		//console.log('addToObj()________validObj', validObj);
	};


    return{
    	setObj: setValidObj,
		getObj: getValidObj,
		setFeedback: feedback,
    	start: startValidation
    }
})();