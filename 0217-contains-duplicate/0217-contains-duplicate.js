/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    for(let i=0; i<=nums.length-2; i++) {
        if(nums[i]===nums[i+1]) return true
    }
    return false;
};