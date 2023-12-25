const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let resultNames = [];
  let repeatCounter = 0;
  function rename(name) {
    if (!resultNames.includes(name)) {
      resultNames.push(name);
    } else {
      if (repeatCounter > 1)
        name = name.slice(0, -3) + "(" + repeatCounter + ")";
      else {
        name = name + "(" + repeatCounter + ")";
      }
      repeatCounter++;
      rename(name);
    }
  }
  names.forEach((el) => {
    rename(el);
    repeatCounter = 1;
  });
  return resultNames;
}

module.exports = {
  renameFiles,
};
