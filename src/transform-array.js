const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  };
  let output = [];
  for (let i = 0; i <= arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        output.push(undefined);
        output.push(undefined);
        i += 1;
        break;
      case '--discard-prev':
        if (i >= 1) {
          output.pop();
          output.push(undefined);
          output.push(undefined);
        };
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          output.push(arr[i + 1]);
        };
        break;
      case  '--double-prev':
        if (i >= 1) {
          output.push(output[output.length - 1]);
        };
        break;
      default: output[i] = arr[i];
    };
  };
  return output.filter((item) => item !== undefined);
};