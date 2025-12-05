/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    const lps = genLps(s)
    const longestPrefix = lps[s.length-1]

    if(longestPrefix!==0) {
        return s.slice(0, longestPrefix)
    } 

    return ""
};

function genLps(pat) {
    let i = 1;
    let len = 0;
    const res = new Array(pat.length).fill(0)

    while (i < pat.length) {
        if (pat[i] === pat[len]) {
            len++;
            res[i] = len;
            i++;
        } else if (len === 0) {
            i++;
        } else {
            len = res[len - 1]
        }

    }

    return res
}