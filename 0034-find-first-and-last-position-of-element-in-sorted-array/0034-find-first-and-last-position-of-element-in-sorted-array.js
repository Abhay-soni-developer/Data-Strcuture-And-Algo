/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let [lb, ub] = [lowerbound(nums, target), upperbound(nums, target)]

    if(nums[lb]===target) {
        return [lb, ub-1]
    }
    
    return [-1, -1]
};

function lowerbound(arr, target) {
    let [low, high] = [0, arr.length]

    while(low<high) {
        let mid = (low+high)>>1
        if(arr[mid]>=target) high=mid;
        else low=mid+1
    }

    return low
}

function upperbound(arr, target){
    let [low, high] = [0, arr.length]

    while(low<high) {
        let mid = (low+high)>>1
        if(arr[mid]>target) high=mid;
        else low=mid+1
    }

    return low
}