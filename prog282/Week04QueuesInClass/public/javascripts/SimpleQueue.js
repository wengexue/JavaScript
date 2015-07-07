// Inspiration: http://stackoverflow.com/a/1590262/253576

var SimpleQueue = (function(){
   'use strict';
	var arr = null;
	
	function SimpleQueue(){
		arr = [];
	};

	SimpleQueue.prototype.front = function () {
		if (arr.length === 0){
			throw new Error("Queue is empty.");
		}
		else{
			return arr[0];
		}
    }; 

	SimpleQueue.prototype.back = function () {
		if (arr.length === 0){
			throw new Error("Queue is empty.");
		}
		else{
			return arr[arr.length-1];
		}        
    }; 

	SimpleQueue.prototype.length = function () {
        return arr.length;
    };     


	SimpleQueue.prototype.enqueue = function (item) {
        arr.push(item);
    }; 

	SimpleQueue.prototype.dequeue = function () {
        return arr.shift();
    }; 

	SimpleQueue.prototype.isEmpty = function () {
        return (arr.length == 0);
    }; 

    return SimpleQueue;

})();


