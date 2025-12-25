/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const arr = new Array(1001).fill(0)
    const result = []
    for(let el of nums1) {
        arr[el]=1
    }

    for(let el of nums2) {
        if(arr[el]===1) {
            arr[el]=0
            result.push(el)
        }
    }


    return result
};