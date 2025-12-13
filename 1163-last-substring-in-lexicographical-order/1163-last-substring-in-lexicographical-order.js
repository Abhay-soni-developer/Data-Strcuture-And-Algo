/**
 * @param {string} s
 * @return {string}
 */


 
var lastSubstring = function(s) {
    let i=0, j=1, k=0;
    const n = s.length;
    
    while(j+k<n) {
        if(s[i+k]>s[j+k]) {
            j = j+k+1
            k=0;
        } else if (s[i+k]<s[j+k]) {
            i=Math.max(i+k+1, j)
            j=i+1;
            k=0;
        } else if(s[i+k]===s[j+k]){
            k++;
        }
    }

    return s.slice(i)
};