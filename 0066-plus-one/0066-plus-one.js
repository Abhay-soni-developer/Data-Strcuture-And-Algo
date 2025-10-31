var plusOne = function(digits) {
    let carry = 0;

    for(let i=digits.length-1; i>=0; i--) {
        
        let temp = digits[i]+carry
        if(i===digits.length-1) {
            temp=temp+1;
        }
     
        if(temp>9) {
            carry=1;
            digits[i] = temp-10;
            continue;
        }
        
        carry=0;
        digits[i]=temp;
    }

    if(carry===1) {
        digits.unshift(carry)
    }

    return digits;
};