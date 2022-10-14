const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats=0;
/*   for (i=0; i<matrix.length; i++) {
    if (matrix[i].length) {
      for(j=0; j<matrix[i].length; j++){
        if (matrix[i][j].length) {
          for (k=0; k<matrix[i][j].length; k++) {
            if (matrix[i][j][k]==='^^') cats++;
          }
        } else { 
          if (matrix[i][j]==='^^') cats++;
        }
      } 
    } else {
        if (matrix[i]==='^^') cats++;
      }
  } */

  matrix.forEach(el=>{
    el.forEach(item=>{
      if (item=='^^') {
        cats++;
      }
    })
  })
  return cats;
}

module.exports = {
  countCats
};
