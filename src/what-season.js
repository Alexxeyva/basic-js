const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'; // not a date
  if (Object.prototype.toString.call(date) == '[object Date]') { // it is a date
    let result = date.getMonth();
    if (result == 11 || result == 0 || result == 1) return 'winter';
    if (result >= 2 && result <= 4) return 'spring';
    if (result >= 5 && result <= 7) return 'summer';
    if (result >= 8 && result <= 10) return 'autumn (fall)';
  }
  if (isNaN(date.getTime())) { // date is not valid
    throw new Error('Error');
  }
};
