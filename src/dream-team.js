const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  members.forEach( member => {
    if (typeof member === 'string') {
      arr.push(member.trim()[0].toUpperCase());
    }
  })
  return arr.sort().join('');
};
