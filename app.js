const calculator = {
    add: function(a, b) {
        console.log("Hello");
        return a + b;
        console.log("Bye bye");
    },
    minus: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const multiplyResult = calculator.multiply(5, minusResult);
const divideResult = calculator.divide(addResult, multiplyResult);