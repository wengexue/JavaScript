function stripWhiteSpace(value) {
        'use strict';
        return String(value)
            .replace(/ /g, '')
            .replace(/\t/g, '')
            .replace(/\r/g, '')
            .replace(/\n/g, '');    
}
    
function stripPunctuation(value) {
        'use strict';
        return String(value)
            .replace(/\./g, '')
            .replace(/!/g, '')
            .replace(/\?/g, '')
            .replace(/,/g, ''); 
}

var SimpleStack = (function(){
   'use strict';
	var stack = null;
	
	function SimpleStack(){
		stack = [];
	};


	SimpleStack.prototype.length = function () {
        return stack.length;
    };     


	SimpleStack.prototype.pop = function () {
		if (stack.length === 0){
			throw new Error("Error! Stack is empty.");
		}
		else{
			return stack.pop();
		}              
    }; 

	SimpleStack.prototype.push = function (item) {
        return stack.push(item);
    }; 

	SimpleStack.prototype.isEmpty = function () {
        return (stack.length == 0);
    }; 
    
	SimpleStack.prototype.testPalindrome = function () {
		var str = "";
		var len = stack.length;
		for (var i = 0; i < len; i++)
			str += stack.pop();
		str = (stripPunctuation(stripWhiteSpace(str))).toUpperCase();
		var reverse_str = str.split("").reverse().join("");
        return (str === reverse_str);
    }; 
    

    return SimpleStack;

})();
