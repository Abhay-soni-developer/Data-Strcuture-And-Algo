/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const lps = genLps(s)
    const patLen = s.length-lps[s.length-1]
    
    if(lps[s.length-1]>0 && s.length%patLen===0) return true;
    return false;
};


function genLps(str) {
    let i=1; len=0;
    const res = new Array(str.length).fill(0)
    
    while(i<str.length) {
        if(str[i]===str[len]) {
            len++;
            res[i]=len
            i++;
        } else if (len===0){
            i++;
        } else {
            len=res[len-1]
        }
    }

    return res;
}
