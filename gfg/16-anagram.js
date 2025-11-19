/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
class Solution {
    areAnagrams(s1, s2) {
        if (s1.length !== s2.length) return false;

        const arr = new Array(26).fill(0)
        let i = 0

        while (s1[i]) {
            arr[s1[i].charCodeAt() - 97]++;
            i++
        }

        i = 0;

        while (s2[i]) {
            arr[s2[i].charCodeAt() - 97]--;
            i++
        }

        for (let x of arr) {
            if (x !== 0) return false
        }

        return true
    }
}


// better implementation

function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) return false;

    const arr = new Array(26).fill(0)
    let i = 0

    while (s1[i]) {
        arr[s1[i].charCodeAt() - 97]++;
        arr[s2[i].charCodeAt() - 97]--;
        i++
    }

    for (let x of arr) {
        if (x !== 0) return false
    }

    return true
}