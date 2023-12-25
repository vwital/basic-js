const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // let counter = 0;
  // let longestDomain = "";
  // domains.forEach((el) => {
  //   if (el.includes("ru")) {
  //     counter++;
  //   }
  //   if (el.length > longestDomain.length) longestDomain = el;
  // });
  // let idx = longestDomain.lastIndexOf(".");
  // console.log(idx);
  // let value = longestDomain.slice(idx, longestDomain.length);
  // console.log(longestDomain);
  // return value;
  // let salyanka = [];
  // let obj = {};
  // let counter = 0;
  // let str = domains.forEach((el) => {
  //   salyanka.push(el.split("."));
  // });
  // let longest = [];
  // arr.forEach((el) => {
  //   if (el.length > longest.length) longest = el;
  // });
  // function getDns(colichestvoOtKonca) {
  //   for (
  //     let i = longest.length - 1;
  //     i >= longest.length - colichestvoOtKonca;
  //     i--
  //   ) {
  //     let value = longest[longest.length - colichestvoOtKonca];
  //   }
  // }
  // return salyanka;
  //   let dom = {};
  //   let repCount = 0;
  //   let curDom = "";
  //   let longestDomain = "";
  //   domains.forEach((el) => {
  //     if (el.length > longestDomain.length) longestDomain = el;
  //   });
  //   let idx = longestDomain.lastIndexOf(".");
  //   let value = longestDomain.slice(idx, longestDomain.length);
  //   domains.forEach((el) => {
  //     if (el.includes(value)) {
  //       repCount++;
  //     }
  //     dom[value] = repCount;
  //   });
  //   return dom;
  // let longest = [];
  // let finalObj = {};
  // let hasOtherLong = true;
  // let str = "";
  // let counter = 1;
  // let strDom = [];
  // domains.forEach((el) => strDom.push(el.split(".")));
  // domains.forEach((el) => {
  //   if (el.split(".").length > longest.length) longest = el.split(".");
  // });
  // function getDns(value) {
  //   for (let i = value.length - 1; i >= 0; i--) {
  //     str = str + "." + value[i];
  //     strDom.forEach((el) => {
  //       console.log("EL", el);
  //       console.log("value", value);
  //       if (el.includes(value)) counter++;
  //     });
  //   }
  //   finalObj[str] = counter;
  //   str = "";
  //   counter = 1;
  // }
  // getDns(longest);
  // function checkOtherDomains() {
  //   domains.forEach((el) => {
  //     if (el.split(".").length == longest.length && longest !== el.split(".")) {
  //       longest = el.split(".");
  //     } else {
  //       hasOtherLong = false;
  //     }
  //   });
  //   getDns(longest);
  // }
  // while (hasOtherLong) {
  //   checkOtherDomains();
  // }
  // longest.shift();
  // getDns(longest);
  // return finalObj;
}

domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
console.log(getDNSStats(domains));

module.exports = {
  getDNSStats,
};
// Разбить на массив значения каждого и искать одинаковые.
