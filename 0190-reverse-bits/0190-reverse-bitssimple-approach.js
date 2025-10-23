/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
  let bit = n.toString(2).padStart(32, 0).split('').reverse().join('')
  return parseInt(bit, 2)
};