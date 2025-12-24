/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const code = (a="")=>(a.charCodeAt(0)-97);

var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;

    const counter = new Array(26).fill(0)

    for(let i=0; i<s.length; i++) {
        counter[code(s[i])]++
        counter[code(t[i])]--
    }

    for(let count of counter) {
        if(count!==0) return false
    }

    return true
};