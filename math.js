// math utility functions

/**
* function add - a stupid function
*
* @param a
* @param b
* @returns {*}
 */

function add(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Not a number");
    }
    return a + b; //adds 2 numbers
}
/**
 *
 * @param a
 * @param b
 * @returns {number}
 */

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
console.log('divide(3,0) =',divide(3,0));