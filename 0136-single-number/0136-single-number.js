/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
    let result = 0;
    for(let i=0; i<=nums.length-1; i++) {
        result=result^nums[i]
    }
    return result;
};