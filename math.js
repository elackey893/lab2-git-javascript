// math utility functions
/**
 *  Math utilities for learning purposes
 *  @file 'math.js'
 *  @author 'Evan Lackey'
 */



import {sum} from "./arrays.js";

/**
* function add two numbers
*
* @param  {number} a - first number
* @param {number} b - second number
* @returns {number} - sum of a and b
 */

export function add(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Add numbers only");
    }
    return a + b; //adds 2 numbers
}
/**
 * subtract two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} difference of a and b
 */

export function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Subtract numbers only");
    }
    return a - b;
}

/**
 * multiplies two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} product of a and b
 */

export function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Multiply numbers only");
    }
    return a * b;
}

/**
 * divides two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} quotient of a and b
 * @throws {Error} if b is zero
 */

export function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Divide numbers only");
    }
    if (b === 0){
        throw new Error ('Cannot divide by zero');
    }
    return a / b;
}

/**
 * power of two numbers
 *
 * @param {number} base - base
 * @param {number} exponent - exponent
 * @returns {number} base raised to exponent
 */

export function power(base, exponent) {
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new Error("power numbers only");
    }
    return Math.pow(base, exponent);
}

/**
 * calculates square root
 *
 * @param {number} n
 * @returns {number} Square root
 * @throws {Error} if n is negative
 */

export function sqrt(n){
    if (typeof n !== "number") {
        throw new Error("sqrt numbers only");
    }
    if (n < 0){
        throw new Error ('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
}

/**
 * calculates factorial
 *
 * @param {number} n
 * @returns {number} Factorial of n
 * @throws {Error} if n is negative
 */

export function factorial(n) {
    if (n < 0){
        throw new Error ('Cannot factor a negative numbers');
    }
    if (typeof n !== "number") {
        throw new Error("factorial numbers only");
    }

    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}



