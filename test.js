/**
 * Native Node.js testing suite for Lab 2
 * @file 'test.js'
 * @author 'Evan Lackey'
 */

//import all the functions
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as math from './math.js';
import * as strings from './strings.js';
import * as arrays from './arrays.js';

describe('Math Module', () => {
    describe('Basic arithmetic', () => {
        it('should add two numbers correctly', () => {
            assert.equal(math.add(5,3), 8);
        });

        it('should throw error when dividing by zero', () =>{
            assert.throws(() => math.divide(10,0), /Cannot divide by zero/);
        });
    });

    describe('Advanced opertations', () => {
        it('should calculate power correctly', () => {
            assert.equal(math.power(2,8), 256);
        });

        it('should throw error for negative square root', () => {
            assert.throws(() => math.sqrt(-4), /Cannot calculate square root of negative number/);
        });
    });
});

describe('String Module', () => {
    describe('String manipulation', () => {
        it('should reverse strings correctly', () => {
            assert.equal(strings.reverse('hello'), 'olleh');
        });

        it('should throw error for non-string input to revers', () => {
            assert.throws(() => strings.reverse(123), /Input must be a string/);
        });
    });
});

describe('Array Module', () => {
    describe('Array calculations', () => {
        it('should sum array elements correctly', () => {
            assert.equal(arrays.sum([1, 2, 3, 4, 5]), 15);
            assert.equal(arrays.sum([]),0);
        });

        it('should throw error for empty array average', () => {
            assert.throws(() => arrays.average([]), /Input must be a non-empty array/);
        });
    });
});

console.log('=== Testing Math Module ===');
console.log('add(5,3) = ', math.add(5,3));
console.log('subtract(10,4)=',math.subtract(10,4));
console.log('multiply(3,7) =',math.multiply(3,7));
console.log('divide(20,4) =', math.divide(20,4));
console.log('power(2,8) =', math.power(2,8));
console.log('sqrt(16) =',math.sqrt(16));
console.log('factorial(5) =', math.factorial(5));

console.log('\n=== Testing String Module ===');
console.log('revers("hello") =', strings.reverse('hello'));
console.log('capitalize("javascript") =', strings.capitalize("javascript"));
console.log('countVowels("hello world") =', strings.countVowels("hello world"));
console.log('isPalindrome("racecar") =', strings.isPalindrome('racecar'));
console.log('isPalindrome("hello")=', strings.isPalindrome("hello"));

console.log('\n==== Testing arrays Module ===');
const testArray = [1, 2, 3, 4, 5, 6];
const duplicateArray = [1, 2, 2, 3, 3, 4];
console.log('testArray = ', testArray);
console.log('sum =', arrays.sum(testArray));
console.log('average =', arrays.average(testArray));
console.log('filterEven =', arrays.filterEven(testArray));
console.log('filterOdd =', arrays.filterOdd(testArray));
console.log('\nArray with duplicates:', duplicateArray);
console.log('removeDuplicates =', arrays.removeDuplicates(duplicateArray));