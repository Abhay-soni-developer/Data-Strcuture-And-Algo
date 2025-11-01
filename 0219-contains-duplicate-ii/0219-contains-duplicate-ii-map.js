/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()

    for(let i=0; i<=nums.length-1; i++) {
        if(map.has(nums[i])) {
            map.get(nums[i]).push(i)
            } else {
            map.set(nums[i], [i])
        }
    }

    for(let [key, value] of map) {
        if(value.length>1) {
            for(let i=0; i<=value.length-2; i++) {
                if(Math.abs([value[i]-value[i+1]])<=k) return true
            }
        }
    }

    return false


};