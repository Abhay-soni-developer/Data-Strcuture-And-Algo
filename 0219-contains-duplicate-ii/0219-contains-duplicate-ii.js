/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {}

    for(let i=0; i<=nums.length-1; i++) {
        if(map[nums[i]]===undefined) {
            map[nums[i]] = [i]
        } else {
            map[nums[i]].push(i)
        }
    }

    for(let key in map) {
        if(map[key].length>1) {
            const x = map[key]
            for(let i=0; i<=x.length-2; i++) {
                if(Math.abs([x[i]-x[i+1]])<=k) return true
            }
        }
    }

    return false


};