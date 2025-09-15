/**
 * Start of test system
 * @file 'test.js'
 * @author 'Evan Lackey'
 */

//import all the functions
import * as math from './math.js';
import * as strings from './strings.js';
import * as arrays from './arrays.js';

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