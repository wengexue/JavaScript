/**
 * @author Charlie Calvert
 */

describe("A Queue Simple Suite", function() {
	'use strict';

	var myQueue = null;

    beforeEach(function() {
        myQueue = new SimpleQueue();
    });

	
	function loadDefaultValues(){
		myQueue.enqueue("alpha");
		myQueue.enqueue("bravo");
		myQueue.enqueue("charlie");
	}	

	
    var padNumber = function(numberToPad, width, padValue) {
        'use strict';
        padValue = padValue || '0';
        numberToPad = numberToPad + '';
        if (numberToPad.length >= width) {
            return numberToPad;
        } else {
        	var t = new Array(width - numberToPad.length + 1);
        	var st = t.join(padValue);
            return st + numberToPad;
        }
    };
    


	it("contains a SimpleQueue spec with an expectation", function() {
		expect(true).toBe(true);
	});

    it("Can create simpleQueue", function() {
        expect(myQueue).not.toBeNull();
    });

	it("Tests simple query", function() {
		loadDefaultValues();
		var value = myQueue.dequeue();
		expect(value).toBe("alpha");
		console.log(value); 
	});

	it("Tests A Queue front", function() {
		loadDefaultValues();
		var value = myQueue.front();
		expect(value).toBe("alpha");
		console.log(value); // displays 2
	});

	it("Tests A Queue back", function() {
		loadDefaultValues();
		var value = myQueue.back();
		expect(value).toBe("charlie");
		console.log(value); // displays 2
	});

	it("calling front does not change the length of the queue", function() {
		loadDefaultValues();
		var beforLen = myQueue.length();
		var value = myQueue.back();
		var afterLen = myQueue.length();
		expect(beforLen === afterLen).toBe(true);
	});


	it("Use a while loop to test that dequeue returns three items before empty becomes truee", function() {
		loadDefaultValues();
		var count = 0;
		while (!myQueue.isEmpty()){
			myQueue.dequeue();
			count++;
		}
		expect(count === 3).toBe(true);
	});


	it("Use a for loop to test that dequeue first returns alpha, then bravo then charlie", function() {
		loadDefaultValues();
		var len = myQueue.length();
		var arr = [];
		for (var i = 0; i < len; i++){
			arr[i] = myQueue.dequeue();
		}
		expect(arr[0]).toBe("alpha");
		expect(arr[1]).toBe("bravo");
		expect(arr[2]).toBe("charlie");
	});


	it("test that you inserted 100 items and that the first item is Item001 and the last is Item100", function() {
		for (var i = 1; i <= 100; i++){
			var num = padNumber(i,3,0);
			myQueue.enqueue("Item"+num);
		}
		var len = myQueue.length();
		expect(len === 100).toBe(true);
		expect(myQueue.front()).toBe("Item001");
		expect(myQueue.back()).toBe("Item100");
	});

	it("insert 100 items. Test that the first 3 items you dequeue are Item001, Item002 and Item003", function() {
		for (var i = 1; i <= 100; i++){
			var num = padNumber(i,3,0);
			myQueue.enqueue("Item"+num);
		}
		var arr = [];
		arr[0] = myQueue.dequeue();
		arr[1] = myQueue.dequeue();
		arr[2] = myQueue.dequeue();
		expect(arr[0]).toBe("Item001");
		expect(arr[1]).toBe("Item002");
		expect(arr[2]).toBe("Item003");
	});

	it("push alpha, bravo, charlie. If you pop twice, the second result is bravo", function() {
		loadDefaultValues();
		var arr = [];
		arr[0] = myQueue.dequeue();
		arr[1] = myQueue.dequeue();
		expect(arr[1]).toBe("bravo");
	});



});
