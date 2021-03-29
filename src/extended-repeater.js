const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let strStringified = String(str);
  let repeatTimes = options.repeatTimes !== undefined? options.repeatTimes: 0;
  let separator = options.separator !== undefined? options.separator: '+';
  let addition = options.addition !== undefined? String (options.addition): '';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined? options.additionRepeatTimes: 0;
  let additionSeparator = options.additionSeparator !== undefined? options.additionSeparator: '|';
  let additionStr;
  let mainStr;

  mainStr = function mainString(repeatTimes) {
    if (repeatTimes > 1) {
      return strStringified + additionStr(additionRepeatTimes) + separator + mainString(repeatTimes - 1);
    } else if (repeatTimes = 1) {
      return strStringified + additionStr(additionRepeatTimes);
    } else {
      return '';
    };
  };

  additionStr = function subString (additionRepeatTimes) {
    if (additionRepeatTimes > 1) {
      return addition + additionSeparator + subString (additionRepeatTimes - 1);
    } else if (additionRepeatTimes = 1) {
      return addition;
    } else {
      return '';
    };
  };

  return mainStr(repeatTimes);
};