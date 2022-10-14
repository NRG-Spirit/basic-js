const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'|| position < 1 || position > this.chain.length || !Number.isInteger(position)) {
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
} else {
    this.chain.splice(position - 1, 1)
}
return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.map(element => `( ${element} )`).join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
