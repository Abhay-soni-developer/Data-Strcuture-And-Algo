/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str = s+s;
    str=str.slice(1,-1);
    if(str.includes(s)) return true;
    return false;
};
