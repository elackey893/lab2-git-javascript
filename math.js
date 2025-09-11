// math utility functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0){
        throw new Error ('Cannot divide by zero');
    }
    return a / b;
}

// test the functions with console log
console.log('testing math functions');
console.log('add(5,3) = ',add(5,3));
console.log('subtract(10,4)=',subtract(10,4));
console.log('multiply(3,7) =',multiply(3,7));
console.log('divide(20,4) =', divide(20,4));