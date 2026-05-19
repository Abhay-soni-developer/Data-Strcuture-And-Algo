/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const counts = new Array(95).fill(0);
    let uniLen = 0;
    let start = 0; let end = 0;

    const getIndex = function (i) {
        return s.charCodeAt(i) - 32
    }

    while (start <= end && end < s.length) {
        if (counts[getIndex(end)] === 0) {
            counts[getIndex(end)]++;
            end++;
        } else {
            counts[getIndex(start)]--;
            start++;
        }


        if (uniLen < (end-start+1)) {
            uniLen = (end-start);
        }
    }

    return uniLen;
};