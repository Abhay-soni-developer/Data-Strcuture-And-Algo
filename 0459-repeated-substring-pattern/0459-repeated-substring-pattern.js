/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i=1; i<s.length; i++) {
        if(s.length%i===0) {
            let count = s.length/i;
            let tmp = s.slice(0, i);
            const res = repeat(tmp, count)
            if(res===s) return true
        }
    }

    return false;
};

function repeat(str, n) {
    let res = ""
    while(n>0) {
        res=res+str;
        n--
    }
    return res
}