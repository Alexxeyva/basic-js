const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCount = 0;
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr = arr.concat(matrix[i]);
  }
  arr.forEach(item => {
    if (item === '^^') {
      catCount += 1;
    }
  });
  return catCount;
};
