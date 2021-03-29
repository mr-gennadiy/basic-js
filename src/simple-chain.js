const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (Number.isInteger(position) && this.getLength() >= position && position >= 1) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error();
    };
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return result;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  chain: [],
};

module.exports = chainMaker;
