/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let i = 0;
    let result = []

    while (i < nums.length) {
        const correctedIndex = nums[i] - 1

        if (nums[i] !== nums[correctedIndex]) {
            [nums[i], nums[correctedIndex]] = [nums[correctedIndex], nums[i]]
        } else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) result.push(i + 1)
    }

    return result
};