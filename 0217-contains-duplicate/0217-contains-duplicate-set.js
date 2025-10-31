/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i=0; i<=nums.length-1; i++) {
        if(set.has(nums[i])) return true
        set.add(nums[i]);
    }
    return false;
};