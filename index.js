/**
 * Main entry point for Lab 2
 * @file 'index.js'
 * @author 'Evan Lackey'
 */

// Import math functions
import * as math from './math.js';
import * as strings from './string.js'
import {isPalindrome} from "./strings.js";

console.log('=== Testing Math Module ===');
console.log('add(5,3) = ', math.add(5,3));
console.log('subtract(10,4)=',math.subtract(10,4));
console.log('multiply(3,7) =',math.multiply(3,7));
console.log('divide(20,4) =', math.divide(20,4));
// console.log('divide(3,0) =',math.divide(3,0));
console.log('power(2,8) =', math.power(2,8));
console.log('sqrt(16) =',math.sqrt(16));
console.log('factorial(5) =', math.factorial(5));

//string.js testing

console.log('\n=== Testing String Module ===');
console.log('revers("hello") =', strings.reverse('hello'));
console.log('capitalize("javascript") =', strings.capitalize("javascript"));
console.log('countVowels("hello world") =', strings.countVowels("hello world"));
console.log('isPalindrome("racecar") =', strings.isPalindrome('racecar'));
console.log('isPalindrome("hello")=', strings.isPalindrome("hello"));
