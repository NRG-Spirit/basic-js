const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
} = options;

str = str + '';
addition = addition + '';

let res = '';

for( let i = 0; i < repeatTimes; i++) {
  res += str;
  for (let j = 0; j < additionRepeatTimes; j++){
    if (j < additionRepeatTimes - 1) {
      res += addition + additionSeparator;
    } else {
      res += addition;
      }
  }
  if (i < repeatTimes - 1) {
    res += separator;
  }
}
return res;
}

module.exports = {
  repeater
};
