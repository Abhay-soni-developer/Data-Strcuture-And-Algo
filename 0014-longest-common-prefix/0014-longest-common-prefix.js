/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length===1) return strs[0];
    let str = strs[0]

    for(let i=0; i<=str.length-1; i++) {
        let all = true;
        console.log(i)
        
        for(j=0; j<strs.length; j++) {
            console.log(str[i], strs[j][i])
            if(str[i]!==strs[j][i]) {
                all=false;
                break;
            }
        }

        if(all===false) {
            str = str.split("").splice(0,i).join('')
            break;
        }
    }

        return str;
}