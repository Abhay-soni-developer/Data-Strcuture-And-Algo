/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const set  =  new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    let sum = 0;

    for(let i=0; i<s.length; i++) {
        if(set.has(s[i])) {
            if(i<s.length/2) {
                sum--
            } else {
                sum++
            }
        }
    }


    if(sum===0) {
        return true;
    } else {
        return false;
    }
};