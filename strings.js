/**
 * String utilities for learning purposes
 * @file 'strings.js'
 * @author 'Evan Lackey'
 */

/**
 * Reverse a string
 * @param {string} str - string to revers
 * @returns {string} Reversed string
 */

export function reverse(str) {
    if (typeof str !== 'string') {
        throw new Error ('Cannot reverse non-strings');
    }
    return str.split('').reverse().join('');
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */

export function capitalize(str) {
    if (typeof str !== 'string') {
        throw new Error ('Cannot capitalize non-strings');
    }
    if (str.length ===0) return '0';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * count vowels in a string
 * @param {string} str - String to count vowels
 * @returns {number} Number of vowels
 */

export function countVowels(str) {
    if (typeof str !== 'string') {
        throw new Error ('Cannot count vowels non-strings');
    }
    const vowels = 'aeiouAeEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

/**
 * check if string is palindrome
 * @param {string} str - String to check
 * @returns {boolean} True if palindrome
 */

export function isPalindrome(str) {
    return 'stubbed';
}

