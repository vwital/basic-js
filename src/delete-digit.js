const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strN = n.toString();
  let numsArr = [];
  console.log(strN);
  for (i = 0; i < strN.length; i++) {
    numsArr.push(+strN.replace(new RegExp(strN[i]), ""));
  }
  console.log(numsArr);
  return Math.max(...numsArr);
}

module.exports = {
  deleteDigit,
};
