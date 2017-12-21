"use strict";
let validMyForm = (function() {
	let validObj, memory;
	const TRUE = true;
	const FALSE = false;

	let setValidObj = (obj)=>{validObj = obj};

	let getValidObj = ()=>{return validObj};

	let error = (link, message)=>{
		if(link.innerHTML === ""){
			link.innerHTML = message;
		}else if(message === " "){
			link.removeChild(link.firstChild);
		};
	};

	let addErrorStyle = (link)=>{
		const WARING = 'red';
		if(Array.isArray(link)){
			link.forEach(el =>{
				el.style.borderColor = WARING;
			});
		}else{
			link.style.borderColor = WARING;
		};
	};

	let removeErrorStyle = (link)=>{
		const GREY = '#ced4da';
		if(Array.isArray(link)){
			link.forEach(el =>{
				el.style.borderColor = GREY;
			});
		}else{
			link.style.borderColor = GREY;
		};
	};

	let addToObj = function(link){
		let add = function(linkOne, ind){
			let name = linkOne.name;
			let type = linkOne.type;
			let value = linkOne.value;
			let keys = Object.keys(validObj);
			if(ind === undefined){ind = ''};
			let flag = keys.some(el => {return el === `${name}${ind}`});

			if(type === 'checkbox' || type === 'radio'){
				if(linkOne.checked && !flag){
					validObj[`${name}${ind}`] = value;
				};
			}else{
				if(!flag){validObj[`${name}`] = value};
			};
		};
		if(typeof link === 'boolean'){
			if(validObj.hasOwnProperty('flag')){
				validObj.flag = validObj.flag && link;
			}else{
				validObj.flag = link;
			};
		}else{
			if(Array.isArray(link)){
				link.forEach((el, ind) =>{
					add(el, ind);
				});
			}else{
				add(link);
			};
		};
	};

	let validInputText = function([link, pattern, errorLink, errorMessage]){
		if(pattern === ' '){
			if(link.value === ''){
				addToObj(FALSE);
				error(errorLink, errorMessage);
				addErrorStyle(link);
			}else{
				addToObj(TRUE);
				addToObj(link);
				error(errorLink, ' ');
				removeErrorStyle(link);
			};
		}else{
			if(!pattern.test(link.value)){
				addToObj(FALSE);
				error(errorLink, errorMessage);
				addErrorStyle(link);
				return false;
			}else{
				addToObj(TRUE);
				addToObj(link);
				error(errorLink, ' ');
				removeErrorStyle(link);
				return true;
			};
		};
	};

	let validSelect = function([link, errorLink, errorMessage]){
		let flag;
		if(Array.isArray(link)){
			flag = link.some(el => {return el.value === ''});
			if(flag){
				addToObj(FALSE);
				error(errorLink, errorMessage);
				link.forEach(el =>{
					if(el.value === ''){
						addErrorStyle(el);
					}else{
						removeErrorStyle(el);
					};
				});
			}else{
				addToObj(TRUE);
				addToObj(link);
				error(errorLink, ' ');
				link.forEach(el =>{
					removeErrorStyle(el);
				});
			};
		}else{
			if(link.value === ''){
				addToObj(FALSE);
				error(errorLink, errorMessage);
				addErrorStyle(link);
			}else{
				addToObj(TRUE);
				addToObj(link);
				error(errorLink, ' ');
				removeErrorStyle(link);
			};
		};
	};
	
	let validChecked =function([sourceElement, errorLink, errorMessage]){
		let arrRadio = Array.prototype.slice.call(sourceElement);
		let flag;
		flag = arrRadio.some(el =>{return el.checked === true});
		if(!flag){
			addToObj(FALSE);
			error(errorLink, errorMessage);
		}else{
			addToObj(TRUE);
			addToObj(arrRadio);
			error(errorLink, ' ');
		};
	};

	let validPassword = function([link1, link2, pattern, errorLink, errorMessage]){
		if(!pattern.test(link1.value) || !pattern.test(link2.value) || link1.value !== link2.value){
			error(errorLink, errorMessage);
			addToObj(FALSE);
			addErrorStyle([link1, link2]);
		}else{
			addToObj(TRUE);
			addToObj(link1);
			error(errorLink, ' ');
			removeErrorStyle([link1, link2]);
		};
	};

	return {
		setObj: setValidObj,
		getObj: getValidObj,
		inputText: validInputText,
		inputRadio: validChecked,
		inputPassword: validPassword,
		select: validSelect
	};
})();