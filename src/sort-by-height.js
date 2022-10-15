const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 let hights = [];
 let res = [];
 arr.map(el=> {
  if (el != -1) {
    hights.push(el);
  }
 })
 hights=hights.sort((a,b)=> {
  return a-b
 });
 let count = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i]  == -1) {
    res.push(arr[i]);
  } else {
    res.push(hights[count]);
    count++
  }
 }
 return res;
}

module.exports = {
  sortByHeight
};
