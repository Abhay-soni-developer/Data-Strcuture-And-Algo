/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let i = 0;
    let result = []

    while (i < nums.length) {
        const correctedIndex = nums[i]-1

        if(nums[i]===nums[correctedIndex] || nums[i]-1===i) {
            i++;
            continue;
        }

        if(nums[i]-1!==i) {
            let temp = nums[i]
            nums[i] = nums[correctedIndex]
            nums[correctedIndex] = temp;
        }
    }

    for(let i=0; i<nums.length; i++) {
        if(nums[i]-1!==i) result.push(i+1)
    }

    return result
};