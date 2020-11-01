const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) === 'object') {
    let objectType = Object.prototype.toString.call(date);
    if (objectType !== '[object Date]') {
      throw new Error();
    };
    let month = date.getMonth();
    if (month > 10 || month <= 1) {
      return 'winter';
    } else if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else return 'fall';
  } else return 'Unable to determine the time of year!';
};