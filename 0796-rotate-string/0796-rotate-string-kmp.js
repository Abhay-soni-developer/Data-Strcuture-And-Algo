/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {

    if(goal.length!==s.length) return false

    str = s+s
    const canBecome = kmp(str, goal)

    if(canBecome) {
        return true
    }

    return false;
};


// string matching algorithm
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


function kmp(str, pat) {

    if (pat.length === 0) return true
    if (str.length < pat.length) return false;

    let i = 0;
    let j = 0;

    const lps = genLps(pat);
    console.log(lps)

    while (i < str.length) {
        if (str[i] === pat[j]) {
            i++;
            j++;

            if (j === pat.length) {
                return i;
            }
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1]
            }
        }
    }

    return false
}
