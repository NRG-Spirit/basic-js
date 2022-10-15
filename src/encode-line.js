const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let arr = str.split('');
let count = 1;
let res = '';
for (let i=0; i<arr.length; i++) {
  if (arr[i]==arr[i+1]) {
    count++;
  } else {
    if (count>1) {
      res += count + arr[i];
      count = 1;
    } else {
      res += arr[i];
    }

  }
}
return res;
}

module.exports = {
  encodeLine
};
