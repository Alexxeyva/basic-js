const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (typeof(str) !== 'string') {
    toString(str);
  }
  if (repeatTimes == undefined) {
    repeatTimes = 1;
  }
  if (separator == undefined) {
    separator = '+';
  }
  if (typeof(addition) !== 'string') {
    toString(addition);
  }
  if (additionRepeatTimes == undefined && addition !== undefined) {
    additionRepeatTimes = 1;
  }
  if (additionSeparator == undefined) {
    additionSeparator = '|';
  }
  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    if (addition !== '') {
      for (let j = 0;  j < additionRepeatTimes; j++) {
        if (j !== (additionRepeatTimes - 1)) {
          result += addition + additionSeparator;
        } else {
          result += addition;
        }
      }
    }
    if (i !== (repeatTimes - 1)) {
      result += separator;
    }
  }
  return result;
};
  