/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    reverseArray(arr) {
        const till = Math.floor((arr.length-1)/2)
        for(let i=0; i<=till; i++) {
            [arr[arr.length-i-1], arr[i]] = [arr[i], arr[arr.length-i-1]]
        }
        return arr;
    }
}


// generic version
function reverseArray(arr, start, end) {
    while(start<end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }

    return arr;
}
