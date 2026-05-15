/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let highestCounter = 0;
    let i = 0;
    while(i<s.length) {
        let temp = i+1;
        while(s[i]==s[temp]) {
            temp++;
        }
        if(temp-i>highestCounter) {
            highestCounter=temp-i;
        }
        i=temp;
    }

    return highestCounter;
};