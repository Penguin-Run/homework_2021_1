'use strict';

const solve = function (str, x) {
  let res = math.evaluate(str.replaceAll("x", x.toString(), str))
  return res ? res : "invalid expression";
};
