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
					stringifyJSON(obj[i]);
					string += ',';
				}
				stringifyJSON(obj[obj.length-1]);
			}
			string += ']';
		} else {	//obj is {} object
			string += '{';
			for(var x in obj){
				stringifyJSON(x);
				string += ':';
				stringifyJSON(obj[x]);
			}
			string += '}';
		}
	} else if(type === 'string'){	//obj is string
		string += '"' + obj + '"';
	} else {	//obj is none of above (bool, num)
		string += obj;
	}
	return string;
};
