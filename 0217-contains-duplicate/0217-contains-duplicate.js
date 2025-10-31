/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {}
    for(let i=0; i<=nums.length-1; i++) {
        if(dict[nums[i]]) return true
        dict[nums[i]]=true;
    }
    return false;
};