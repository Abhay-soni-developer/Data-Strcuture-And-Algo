/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 0;
    let high = n;
    let found = 2
    let mid;

    while (found !== 0) {
        mid = low + ((high - low) >> 1);

        found = guess(mid);
        if (found === -1) {
            high = mid - 1;
        } else if (found === 1) {
            low = mid + 1
        }
    }

    return mid;
};