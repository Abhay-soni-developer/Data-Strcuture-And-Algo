// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    addBinary(s1, s2) {
        let carry = 0
        s1 = s1.split("")
        s2 = s2.split("")
        let len = Math.max(s1.length, s2.length)
        let res = []

        for (let i = len - 1; i >= 0; i--) {
            let t1 = s1.pop()
            let t2 = s2.pop()

            if (t1 === undefined) {
                t1 = "0"
            }

            if (t2 === undefined) {
                t2 = "0"
            }

            t1 = Number(t1)
            t2 = Number(t2)

            if (t1 + t2 + carry === 3) {
                res.unshift(1)
                carry = 1
            } else if (t1 + t2 + carry === 2) {
                res.unshift(0)
                carry = 1
            } else if (t1 + t2 + carry === 1) {
                res.unshift(1)
                carry = 0
            } else if (t1 + t2 + carry === 0) {
                res.unshift(0)
                carry = 0
            }

        }

        if (carry === 1) {
            res.unshift(1)
        }

        while (res[0] === 0) {
            res.shift()
        }

        return res.join("")
    }
}


// better implementation

function addBinary(s1, s2) {
    let l1 = s1.length - 1;
    let l2 = s2.length - 1;
    let carry = 0;
    let res = []


    while (l1 >= 0 || l2 >= 0) {
        let t1, t2;

        if (s1[l1] === "1" || s1[l1] === "0") {
            t1 = Number(s1[l1]);
        } else {
            t1 = 0
        }

        if (s2[l2] === "1" || s2[l2] === "0") {
            t2 = Number(s2[l2]);
        } else {
            t2 = 0;
        }

        res.unshift((t1 + t2 + carry) % 2)
        carry = Math.floor((t1 + t2 + carry) / 2)

        l1--;
        l2--;

    }

    if (carry === 1) {
        res.unshift(1)
    }


    while (res[0] === 0) {
        res.shift()
    }

    return res.join("")
}


console.log(addBinary("01001001", "0110101"))