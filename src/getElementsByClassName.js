// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result =[];
  var holder = document.childNodes;
  var recurse = function(object) {
	for (var i = 0; i < object.length; i++) {
		if(object[i].classList){
			if(object[i].classList.contains(className)){
				console.log(object[i]);
				result.push(object[i]);
			}
		}
		if(object[i].hasChildNodes()){
			recurse(object[i].childNodes);
		}
	}
	};
  recurse(holder);
  return result;
};
