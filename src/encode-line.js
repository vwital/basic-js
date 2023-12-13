const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let symCounter = 1;
  let finalStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      symCounter += 1;
    } else {
      if (symCounter === 1) {
        finalStr += `${str[i]}`;
      } else {
        finalStr += `${symCounter}${str[i]}`;
        symCounter = 1;
      }
    }
  }
  return finalStr;
}

console.log(encodeLine("aabbbc"));
console.log(encodeLine("abbcca"));

module.exports = {
  encodeLine,
};

//Если нужно подсчитать количество одинаковых символов в разнобой

// let currentQuantity = 1;
//   let wereCharacters = [];
//   let resultStr = "";
//   for (i = 0; i < str.length; i++) {
//     if (!wereCharacters.includes(str[i])) {
//       for (j = i + 1; j < str.length; j++) {
//         if (str[i] === str[j]) {
//           currentQuantity++;
//         }
//       }
//       if (currentQuantity === 1) resultStr += str[i];
//       if (currentQuantity > 1) {
//         resultStr += `${currentQuantity.toString()}${str[i]}`;
//       }
//       currentQuantity = 1;
//       wereCharacters.push(str[i]);
//     }
//   }
//   return resultStr;
