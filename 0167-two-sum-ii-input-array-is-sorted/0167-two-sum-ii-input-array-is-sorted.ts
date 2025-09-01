function twoSum(nums: number[], target: number): number[] {
    let i: number = 0
    let j: number = nums.length - 1

    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) return [i + 1, j + 1];
        sum > target ? j-- : i++;
    }
};