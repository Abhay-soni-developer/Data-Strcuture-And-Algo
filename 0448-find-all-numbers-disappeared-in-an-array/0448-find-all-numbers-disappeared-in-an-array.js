/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let i = 0;
    let set = new Set()

    while (i < nums.length) {
        const correctedIndex = nums[i]-1

        if(nums[i]===nums[correctedIndex]) {
            i++;
            continue;
        }

        if(nums[i]-1!==i) {
            let temp = nums[i]
            nums[i] = nums[correctedIndex]
            nums[correctedIndex] = temp;
        } else if (nums[i]-1===i) {
            i++;
        }
    }

    for(let i=0; i<nums.length; i++) {
        if(nums[i]-1!==i) set.add(i+1)
    }

    return [...set]
};