/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxSubarraySum(arr) {
        let sum=arr[0];
        let res=sum;
        let j=1;
        
        while(j<arr.length) {
            sum=Math.max(0, sum)
            sum=sum+arr[j]
            res = Math.max(sum, res)
            j++;
        }
        
        return res
        
    }
}