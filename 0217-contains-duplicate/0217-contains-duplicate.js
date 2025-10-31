/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i=0; i<=nums.length-1; i++) {
        set.add(nums[i]);
    }
    if(set.size===nums.length) return false;
    return true;
};