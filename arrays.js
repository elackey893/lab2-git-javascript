/**
 * Array utilities for Lab 2
 * @file 'array.js'
 * @author 'Evan Lackey'
 */

/**
 * Sum all elements in array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of all elements
 */
export function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.reduce((acc, num) => acc + num, 0);
}