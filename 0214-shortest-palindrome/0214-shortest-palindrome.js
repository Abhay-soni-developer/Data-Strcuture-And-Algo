/**
 * @param {string} s
 * @return {string}
 */


var shortestPalindrome = function(s) {
    if(s.length===0 || s.length===1) return s
    const revStr = reverse(s)
    let lps = genLps(s+"$"+revStr)
    return revStr.slice(0, revStr.length-lps[lps.length-1])+s;
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


function reverse(s) {
    let i=s.length-1;
    let str = ""
    while(i>=0) {
        str=str+s[i]
        i--
    }
    return str
}