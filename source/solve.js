'use strict';

/**
 * This is a function.
 *
 * @param {string} str - string, representing expression
 * @param {number} x - variable to execute expression with
 * @return {number} - result of the expression
 *
 * @example
 *
 *     solve('((5 - x) * (x + 5)) * x * x', 3)
 */

const solve = (str, x) => {
  if (typeof str != 'string' || typeof x != 'number') return 'invalid input';

  const res = eval(str.replaceAll('x', x.toString(), str));
  return res ? res : 'invalid expression';
};
