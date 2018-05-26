"use strict";
let validMyForm = (function() {
	let validObj;
	const TRUE = true;
	const FALSE = false;
	const WARNING = 'red';
	const GREY = '#ced4da';

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
		if(Array.isArray(link)){
			link.forEach(el =>{
				el.style.borderColor = WARNING;
			});
		}else{
			link.style.borderColor = WARNING;
		};
	};

	let removeErrorStyle = (link)=>{
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
			// console.log("name", name);
			// console.log("flag", flag);
			if(type === 'checkbox' || type === 'radio'){
				if(linkOne.checked && !flag){
					validObj[`${name}${ind}`] = value;
				};
			}else{
				if(!flag){validObj[`${name}`] = value};
			};
		};
		if(typeof link === 'boolean'){
			//console.log('validObj.flag',validObj.flag);
			//console.log('link',link);
			if(validObj.hasOwnProperty('flag')){
				//console.log('validObj.hasOwnProperty(flag)');
				validObj.flag = validObj.flag && link;
			}else{
				validObj.flag = link;
			};
			//console.log('after validObj.flag',validObj.flag);
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

	let validPassword = function([link1, link2, pattern, errorLink1, errorLink2, errorMessage1, errorMessage2]){
		// let link1 = a;
		// let link2 = b;
		// let 
		// console.log(link1, link2, pattern, errorLink1, errorLink2, errorMessage1, errorMessage2);

		function validOnePassword (link, pattern, errorLink, errorMessage){
			//console.log('link.value', link.value)
			//console.log('!pattern.test(link.value)', pattern.test(link.value));
			if(pattern.test(link.value)){
				//console.log('pattern.test(link.value)');
				error(errorLink, ' ');
				removeErrorStyle(link);
				return true;
			}else{
				//console.log('!pattern.test(link.value)');
				error(errorLink, errorMessage);
				addErrorStyle(link);
				return false;
			};
		}

		//console.log('onePass',);
		let onePass = validOnePassword(link1, pattern, errorLink1, errorMessage1);
		//console.log('twoPass',);
		let twoPass = validOnePassword(link2, pattern, errorLink2, errorMessage2);
		//console.log("onePass =", onePass , "twoPass =", twoPass);
		
		if(onePass && twoPass){
			//console.log('onePass && twoPass');
			if(link1.value !== link2.value){
				//console.log('link1.value !== link2.value');
				error(errorLink1, errorMessage1);
				error(errorLink2, errorMessage2);
				addToObj(FALSE);
				addErrorStyle([link1, link2]);
			}else{
				//console.log('link1.value === link2.value');
				addToObj(TRUE);
				//console.log('validObj.flag_1', validObj.flag);
				addToObj(link1);
				//console.log('validObj.flag_2', validObj.flag);
				error(errorLink1, ' ');
				error(errorLink2, ' ');
				removeErrorStyle([link1, link2]);
			};
		}

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