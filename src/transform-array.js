const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof (arr) !== 'Array') {
    throw new Error;
  };
  let output = {};
  let findInsrtuction = function () {
  };
  for (let i = 0; i <= arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (typeof (output[i + 2]) === 'string') {
          
        };
        arr.slice().concat(elem.shift());
      case '--discard-prev':
        return arr.slice().pop().concat(elem);
      case '--double-next':
        return arr.slice().concat(elem.push(elem[elem.length]));
      case  '--double-prev':
        return arr.slice().push(arr[arr.length]).concat(elem);
    };
  };
};