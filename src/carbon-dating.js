const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == Number && sampleActivity > 0) {
    let age = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY/sampleActivity);
    return age;
  } else {
    return false;
  };
};