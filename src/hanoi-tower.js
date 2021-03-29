const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = (disksNumber != 0)? Math.pow (2, disksNumber) - 1: 0;
  result.seconds = Math.floor(result.turns / turnsSpeed * 3600);
  return result;
};