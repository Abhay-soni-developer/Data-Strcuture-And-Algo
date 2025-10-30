// User function Template for javascript
// https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1

/**
 * @param {number[]} arr
 * @returns {void}
 */

// two pointer approach
class Solution {
    segregateElements(arr) {
        let low=0;
        let high=arr.length-1;
        
        while(low<=high) {
            if(arr[low]>0) {
                [arr[low], arr[high]] = [arr[high], arr[low]]
                high--;
            } else {
                low++;
            }
        }
    }
}
