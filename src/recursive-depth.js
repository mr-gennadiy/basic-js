const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let switcher = new Boolean;
    let flatten = [];
    let deep = 0;
    function undeeper (arr) {
      switcher = false;
      flatten = arr.reduce ( (acc, val) => {
        if (Array.isArray(val) === true) {switcher = true};
        return acc.concat(val);
      }, [] );
      deep++;
      if (switcher) return undeeper (flatten);
      else return deep;
    };
    return undeeper (arr);
  };
};