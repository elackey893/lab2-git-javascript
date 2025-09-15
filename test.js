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

        it('should subtract two numbers correctly', () => {
            assert.equal(math.subtract(5,3), 2);
        })

        it('should throw error when dividing by zero', () =>{
            assert.throws(() => math.divide(10,0), /Cannot divide by zero/);
        });

        it('should throw error when adding strings ', () => {
            assert.throws(() => math.add('two', 'five'), /Add numbers only/);
        });

    });

    describe('Advanced operations', () => {
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

        it('should capitalize the string', () => {
            assert.equal(strings.capitalize('hello'), 'Hello');
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

        it('should find average', () => {
            assert.equal(arrays.average([2,2,2]), 2);
        });

    });
});


