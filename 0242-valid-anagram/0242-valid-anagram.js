/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const code = (a="")=>(a.charCodeAt(0)-97);

var isAnagram = function(s, t) {
    const counter = new Array(26).fill(0)

    for(let x of s) {
        counter[code(x)]++
    }

    for(let x of t) {
        counter[code(x)]--
    }

    console.log(counter)

    for(let count of counter) {
        if(!(count===0)) return false
    }

    return true
};