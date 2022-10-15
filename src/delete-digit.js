const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let numbers = n.toString().split('');
let array = [];
let arr = [];
for (let i=0; i<numbers.length; i++) {
  for (let j=0; j<numbers.length; j++) {
    if (j!=i) {
      arr.push(numbers[j]);
    }
  }
  if (arr.length > 0) {
    array.push(Number(arr.join('')));
    arr = [];
  }
}
return Math.max(...array,0);
}

module.exports = {
  deleteDigit
};
