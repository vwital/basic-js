const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newString = "";
  let repeatTimes = options.repeatTimes;
  if (!options.repeatTimes) repeatTimes = 1;
  let additionRepeatTimes = options.additionRepeatTimes;

  if (!options.additionRepeatTimes && !options.addition) {
    additionRepeatTimes = 0;
  }
  if (options.addition && !options.additionRepeatTimes) {
    additionRepeatTimes = 1;
  }
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";

  let additionalStr = "";
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i < additionRepeatTimes - 1) {
      additionalStr =
        additionalStr + options.addition + options.additionSeparator;
    } else {
      additionalStr = additionalStr + options.addition;
    }
  }
  if (repeatTimes === 1) {
    return (newString = str + additionalStr);
  }
  if (repeatTimes > 1) {
    newString = str + additionalStr + options.separator;
    repeatTimes--;
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (i < repeatTimes - 1) {
      newString = newString + str + additionalStr + options.separator;
    } else {
      newString = newString + str + additionalStr;
    }
  }
  return newString;
}

module.exports = {
  repeater,
};
