const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counts = backyard.flat(Infinity).filter(item => item == "^^");
  return counts.length > 0? counts.length: 0;
};