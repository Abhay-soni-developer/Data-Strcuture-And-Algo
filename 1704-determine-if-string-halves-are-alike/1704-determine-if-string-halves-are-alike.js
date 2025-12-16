/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const dic = {a: 0, e: 0, i: 0, o: 0, u: 0, A: 0, E: 0, I: 0, O: 0, U: 0}

    for(let i=0; i<s.length/2; i++) {
        if(dic[s[i]]!==undefined) {
            dic[s[i]]++
        }
    }

    for(let i=s.length/2; i<s.length; i++) {
        if(dic[s[i]]!==undefined) {
            dic[s[i]]--
        }
    }

    let sum = 0;
    for(let key in dic) {
        sum=sum+dic[key]
    }

    if(sum===0) {
        return true
    } else {
        return false
    }
};