const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const isLatter = (letter) => /^[A-Za-z]*$/.test(letter);
  let TeamName = '';
  if (!Array.isArray(members)) return false
  for (i=0; i<members.length; i++) {
    if (typeof(members[i]) == 'string') {
      while( members[i][0] == " ") {
        members[i] = members[i].slice(1);
      }
      if(members[i][0]) { 
        TeamName+=members[i][0];
      }
    }
  }
  TeamName = TeamName.toUpperCase();
  let sortedName = TeamName.split('').sort().join('');
  return sortedName
}

module.exports = {
  createDreamTeam
};
