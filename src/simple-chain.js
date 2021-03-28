const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain = [];
      throw new Error('Error');
    } else {
      if (!this.chain[position]) {
        this.chain = [];
        throw new Error('Error');
      } else {
        this.chain.splice(position-1, 1);
      }
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
