/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    const count = Math.ceil(b.length/a.length);
    
    let str = repeatString(a, count)
    
    if (kmp(str,b)) {
        return count
    } else {
        str=str+a
        if(kmp(str, b)) {
            return count+1
        }
    }

    return -1;
};


function kmp(str, pat) {

    if (pat.length === 0) return true
    if (str.length < pat.length) return false;

    let i = 0;
    let j = 0;

    const lps = genLps(pat);

    while (i < str.length) {
        if (str[i] === pat[j]) {
            i++;
            j++;

            if (j === pat.length) {
                return true
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


function repeatString(a, count) {
    let str = ""
    
    while (count>0) {
        str=str+a
        count=count-1
    }
    
    return str;
}

function genLps(pat) {
    let i=1;
    let len=0;
    const res = new Array(pat.length).fill(0)

    while(i<pat.length) {
        if(pat[i]===pat[len]) {
            len++;
            res[i]=len;
            i++;
        } else if (len===0){
            i++;
        } else {
            len=res[len-1]
        }
    }

    return res;
}