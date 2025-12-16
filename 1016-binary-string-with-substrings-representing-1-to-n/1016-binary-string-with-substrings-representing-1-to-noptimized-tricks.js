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
        let num = 0;
        for(let j=0; j<len; j++) {
            num = (num*2)+parseInt(s[i+j])
            if(num>0 && num<=n) {
                set.add(num)
            } else if(num>n) {
                break;
            }
        }

        if(set.size===n) {
            return true
        }
    }


    return false
};