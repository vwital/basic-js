const { NotImplementedError, CONSTANTS } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let resultArray = [];
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const dbNext = "--double-next";
  const dbPrev = "--double-prev";
  const dcNext = "--discard-next";
  const dcPrev = "--discard-prev";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === dbNext && arr[i + 1]) {
      resultArray.push(arr[i + 1]);
    } else if (arr[i] === dbPrev && arr[i - 1] && arr[i - 2] !== dcNext) {
      resultArray.push(arr[i - 1]);
    } else if (arr[i] === dcPrev && arr[i - 1] && arr[i - 2] !== dcNext) {
      resultArray.pop();
    } else if (arr[i] === dcNext && arr[i + 1]) {
      i++;
    } else {
      if (
        arr[i] === dbNext ||
        arr[i] === dbPrev ||
        arr[i] === dcNext ||
        arr[i] === dcPrev
      ) {
        //do nothing
      } else {
        resultArray.push(arr[i]);
      }
    }
  }
  return resultArray;
}

// console.log(transform([1, 2, 3, "--double-prev", 4, 5]));

// console.log(transform(["--discard-prev", 1, 2, 3]));
// console.log(transform(["--double-prev", 1, 2, 3]));
// console.log(transform([1, 2, 3, "--double-next"]));
// console.log(transform([1, 2, 3, "--discard-next"]));

console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
);
module.exports = {
  transform,
};
