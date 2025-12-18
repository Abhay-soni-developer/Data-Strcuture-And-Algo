/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const ub = ubBinarySearch(nums, target)

    if(ub>0 && nums[ub-1]===target) {
        return ub-1 // exact found
    }

    return ub
};

// upperbound binary search
function ubBinarySearch(nums, target) {
    let [low, high] = [0, nums.length]

    while(low<high) {
        let mid = (low+high)>>1

        if(nums[mid]<=target) low=mid+1;
        else high = mid;
    }

    return low
}