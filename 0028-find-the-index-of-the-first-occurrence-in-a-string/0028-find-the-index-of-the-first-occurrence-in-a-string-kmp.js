/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    return kmp(haystack, needle)
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
        } else {

            if (len === 0) {
                i++;
            } else {
                len = res[len - 1]
            }
        }
    }

    return res
}

function kmp(str, pat) {
    if(str.length===0) return -1
    if(str.length<pat.length) return -1


    let i=0;
    let j=0;
    const lps = genLps(pat)

    while(i<str.length) {
        if(str[i]===pat[j]) {
            i=i+1;
            j=j+1;

            if(j>pat.length-1) {
                return i-j
            }

        } else {
             if(j===0) {
                i++;
             } else if (j!=0) {
                j=lps[j-1]
             }
        }
    }

    return -1;
}





