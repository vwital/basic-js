const { NotImplementedError } = require("../extensions/index.js");

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
    if (value) {
      this.chain.push(`( ${value} )`);
      return this;
    } else {
      return this;
    }
  },
  removeLink(position) {
    if (!this.chain.position) {
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position, 1);
      return this;
    }
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
      return this;
    }
  },
  finishChain() {
    let res = this.chain.join("~~");
    console.log(this.chain);
    this.chain = [];
    return res;
  },
};

console.log(
  chainMaker.addLink(1).addLink(2).addLink(null).reverseChain().finishChain()
);
console.log(chainMaker.chain);
module.exports = {
  chainMaker,
};
