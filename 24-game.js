// 24 Game ~ Rosetta Code Programming Task
// http://rosettacode.org/wiki/24_game

var readline = require('readline');

// creates a readline interface
var rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var digitArr = [];

// creates a random 4 digit set with values between 1-9
var getDigits = function () {
    for (var i = 0; i < 4; i++) {
	digitArr[i] = Math.floor((Math.random() * 9) + 1);
    }
    return digitArr;
};

// parses and evaluates an infix notation expression
var evaluateInfix = function (expression) {
    
    // sorts infix expression into separate operand and operator stacks
    var operatorStack = [];
    var operandStack = [];
    for (var i = 0; i < expression.split('').length; i++) {
	if (['1','2','3','4','5','6','7','8','9'].indexOf(expression.split('')[i]) >= 0) {
	    operandStack.push(expression.split('')[i]);
	}
	else if (['*','/','+','-'].indexOf(expression.split('')[i]) >= 0) {
	    operatorStack.push(expression.split('')[i]);
	}
    }
    return operandStack;
};

// returns true if solution is valid, false otherwise
var checkValidity = function (answer) {
    
};

console.log(evaluateInfix('5*3+4-9'));

/*
// readline question. callback handles the response
rl.question(getDigits() + '\n' + 'Enter an expression using the 4 digits provided which evaluates to 24 -->\n', function(answer) {
    if (evaluate(answer) == 24 && checkValidity(answer)) {
	console.log('Good job! Your solution is correct!');
    } else {
	console.log('Try again...You entered an incorrect solution.');
    }
});
*/
