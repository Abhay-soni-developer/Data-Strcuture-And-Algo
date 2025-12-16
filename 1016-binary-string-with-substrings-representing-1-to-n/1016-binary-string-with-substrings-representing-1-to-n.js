/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    const len = 32-Math.clz32(n);
    const set = new Set()


    for(let i=0; i<s.length; i++) {
        if(s[i]==="0") continue;
        for(let j=0; j<len; j++) {
            const num = parseInt(s.substr(i, j+1), 2)
            if(num>0 && num<=n) {
                set.add(num)
            }
        }

        if(set.size===n) {
            return true
        }
    }


    return false
};