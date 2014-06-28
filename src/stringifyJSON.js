// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
	var string = '';
	var type = typeof(obj);

	if(type === 'object'){	//obj is an object
		if(obj === null){	//obj is null object
			string += obj;
		} else if(Array.isArray(obj)){	//obj is an array
			string += '[';
			if(obj.length){
				for(var i = 0; i < obj.length-1; i++){
					string += stringifyJSON(obj[i]);
					string += ',';
				}
				string += stringifyJSON(obj[obj.length-1]);
			}
			string += ']';
		} else {	//obj is {} object
			string += '{';
			for(var x in obj){
				if((typeof(obj[x]) != 'undefined')&&(typeof(obj[x]) != 'function')){	//don't stringify if function or undefined
					string += stringifyJSON(x);
					string += ':';
					string += stringifyJSON(obj[x]);
					string += ',';
				}
			}
			if(string.charAt(string.length-1) === ','){
				string = string.slice(0, -1);
			}
			string += '}';
		}
	} else if(type === 'string'){	//obj is string
		string += '"' + obj + '"';
	} else if(type === 'boolean'||'number') {	//obj is boolean or num
		string += obj;
	}
	return string;
};
