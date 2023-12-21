const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (!date) return "Unable to determine the time of year!";
  if (date instanceof Date) {
    if (Object.getOwnPropertyNames(date).length !== 0) {
      throw new Error("Invalid date!");
    }
    let month = date.getMonth();
    if (month <= 1 || month === 11) return "winter";
    if (month > 1 && month < 5) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month > 7 && month < 11) return "autumn";
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
