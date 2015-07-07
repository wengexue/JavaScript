/**
 * @author Charlie Calvert
 */


describe("A Stack Simple Spec", function() {
	
	var myStack = null;

    beforeEach(function() {
        myStack = new SimpleStack();
    });

	
	function removeItem(s,removeId){
		var array = [];
		for (var i = 0; i <= removeId; i++){
			array[i] = s.pop();
		}		
		for (var i = array.length-2; i >= 0; i--){
			var a = array[i];
			s.push(array[i]);
		}
		return s;
	}	
	
	
	it("contains a SimpleStack spec with an expectation", function() {
		expect(true).toBe(true);
	});
	
    it("Can create a SimpleStack", function() {
        expect(myStack).not.toBeNull();
    });	

	it("Push the following items onto the stack: alpha, bravo, test the length is 3", function() {
		myStack.push("alpha");
		myStack.push("bravo");
		myStack.push("charlie");
		expect(myStack.length() === 3).toBe(true);
	});

	it("Push the same three items and pop once. Show that the return value is charlie", function() {
		myStack.push("charlie");
		myStack.push("charlie");
		myStack.push("charlie");
		expect(myStack.pop()).toBe("charlie");
	});

	it("Push the same three items and pop twice. Show that the length is set to 1", function() {
		myStack.push("charlie");
		myStack.push("charlie");
		myStack.push("charlie");
		myStack.pop();
		myStack.pop();
		expect(myStack.length()).toBe(1);
	});

	it("Show that your stack throws an exception if you try to pop an item off an empty stack.", function() {
//		expect(myStack.pop()).toBe();
	});

	it("Add a testPalindrome method to your stack class, test input is palindrome", function() {
		var test_str = "Was it a cat I saw?";
		var characters = test_str.split("");
		for (var i = 0; i < characters.length; i++){
			myStack.push(characters[i]);
		}
		expect(myStack.testPalindrome()).toBe(true);		
	});

	it("test input is not palindrome", function() {
		var test_str1 = "Was it a bat or a rat that I saw?";
		var characters = test_str1.split("");
		for (var i = 0; i < characters.length; i++){
			myStack.push(characters[i]);
		}
		expect(myStack.testPalindrome()).toBe(false);
	});


	it("Create a removeItem method", function() {
		var arr = ["alpha", "bravo", "charlie", "delta", "echo"];
		for (var i = 0; i < arr.length; i++){
			myStack.push(arr[i]);
		}
		var len = myStack.length();
		var removeId = (len%2)?Math.floor((len/2+1)):Math.floor((len/2));
		myStack = removeItem(myStack,removeId);
		for (var i = 0; i < myStack.length(); i++){
			if (i < removeId){
				var it = myStack.pop();
				expect(it).toBe(arr[arr.length-1 - i]);
			}
			else{
				var it = myStack.pop();
				expect(it).toBe(arr[arr.length-1-i-1]);
			}
		}
	});

	
});
