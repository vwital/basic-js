const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.maxDepth = 1;
  }
  calculateDepth(arr) {
    this.depth++;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        this.calculateDepth(arr[i]);
      }
      if (this.depth > this.maxDepth) {
        this.maxDepth = this.depth;
        this.depth = 1;
      }
    }

    return this.maxDepth;
  }
}

const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
console.log(
  depthCalc.calculateDepth([
    1,
    [8, [[]]],
    [
      [
        [
          [
            [
              [
                [
                  [
                    [
                      [[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]],
                      [],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    2,
    3,
    [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ["6575", ["adas", ["dfg", [0]]]],
  ])
);
// console.log(
//   depthCalc.calculateDepth([
//     1,
//     2,
//     3,
//     4,
//     [1, 2, [1, 2, [[[]]]]],
//     5,
//     [1, [[[[[[]]]]]]],
//   ])
// );

module.exports = {
  DepthCalculator,
};
