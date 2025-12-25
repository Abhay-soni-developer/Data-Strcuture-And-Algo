/**
 * @param {number[]} nums
 * @return {number[]}
 */


// without using the division operation.
var productExceptSelf = function (nums) {
    let prod = 1
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            prod = prod * nums[i]
            continue
        } else {
            zeroCount++
        }
    }


    for (let i = 0; i < nums.length; i++) {

        if (zeroCount > 0) {
            if (zeroCount === 1 && nums[i] === 0) {
                nums[i]=prod;
            } else {
                nums[i] = 0

            }
            continue;
        }

        if (nums[i] !== 0) {
            nums[i] = prod / nums[i]
        }
    }

    return nums;
};