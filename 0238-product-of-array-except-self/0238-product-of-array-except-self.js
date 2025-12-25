/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const left = [nums[0]]
    const right = [nums[nums.length - 1]]

    for (let i = 1; i < nums.length; i++) {
        left.push(left[i - 1] * nums[i])
        right.unshift(right[0] * nums[nums.length - 1 - i])
    }

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            nums[i] = right[i+1]
            continue;
        }

        if (i === nums.length - 1) {
            nums[i] = left[i-1]
            continue;
        }

        nums[i] = left[i - 1] * right[i + 1]
    }

    return nums;
};