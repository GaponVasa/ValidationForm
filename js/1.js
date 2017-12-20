"use strict";



let min = function(g) {
	let outer = function(){
		function inner(){
			let cell = validFlag;
			return cell;
		};
		return inner;
	};
	let memmory = outer();
	console.log(memmory());
}

//min(1);