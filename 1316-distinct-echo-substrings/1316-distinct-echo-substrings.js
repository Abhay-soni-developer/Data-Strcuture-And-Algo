/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    let count = 0;
    let set = {}
     for(let size=1; size<=Math.floor(text.length/2); size++) {
        let lastPat = ""
        for(let i=0; i<=text.length-(2*size); i++) {
            let k=i+size;
            let start = k;
            let end = i+(size*2)

            if(text.slice(i,k)===text.slice(start,end)) {
                if(set[text.slice(i,k)]===undefined) {
                    set[text.slice(i,k)]=1
                    count++;
                }
            }
        }
     }

    return count;
};