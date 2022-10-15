const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let dns = '';

  domains = domains.map(el => el.split('.').reverse());

for (let i=0; i<domains.length; i++) {
  dns = '';
  for (let j=0; j<domains[i].length; j++){
    dns += '.'+domains[i][j];
    if (!res.hasOwnProperty(dns)) {
      res[dns] = 1;
    } else {
      res[dns]++;
    }

  }


}

  return res;
}

module.exports = {
  getDNSStats
};
