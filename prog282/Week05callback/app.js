function square(operand){
	return operand*operand;
}

function calculate(func, operand){
	return func(operand);
}

var result = square(3);
console.log(result);
result = calculate(square, 25);
console.log(result);
