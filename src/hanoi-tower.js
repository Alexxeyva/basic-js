const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (typeof disksNumber == 'number' && typeof turnsSpeed == 'number') {
    let num = Math.pow(2, disksNumber) - 1;
    let sec = Math.floor((num * 60 * 60) / turnsSpeed);
    return { turns: num,
             seconds: sec, }
    } else {
      return false;
    }
};
