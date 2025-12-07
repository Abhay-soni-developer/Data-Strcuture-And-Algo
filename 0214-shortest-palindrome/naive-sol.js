var shortestPalindrome = function(s) {
    if(s.length===0 || s.length===1) return s
    const revStr = reverse(s)
    let i=0;
    
    while(i<s.length) {
        const temp = revStr.slice(0,i)
        if(isPalindrome(temp+s)) {
            return temp+s
        } else {
            i++
        }
    }

    return false;
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length-1;
    while(i<j) {
        if(str[i]===str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true
}

function reverse(s) {
    let i=s.length-1;
    let str = ""
    while(i>=0) {
        str=str+s[i]
        i--
    }
    return str
}