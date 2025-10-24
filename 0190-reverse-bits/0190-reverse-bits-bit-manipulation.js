/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;
    for(let i=0; i<31; i++) {
        result = result|(n&1)
        result = result << 1
        n=(n>>>1)
    }
    return result
};