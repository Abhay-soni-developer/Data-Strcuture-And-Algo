/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let map = new Map();
    let words = s.split(" ");
    let usedUp = new Set();
    let sPat = "";

    if (words.length !== pattern.length) return false;

    for (let [index, word] of words.entries()) {
        if (!map.has(word)) {
            if (usedUp.has(pattern[index])) return false;
            map.set(word, pattern[index])
            usedUp.add(pattern[index])
        } else {

        }

        sPat = sPat + map.get(word);
    }

    return sPat === pattern;
};