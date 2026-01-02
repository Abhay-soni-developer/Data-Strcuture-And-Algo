/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    for(let gap=nums.length >> 1; gap>0; gap = gap >> 1 ) {
        for(let i=gap; i<nums.length; i++) {
            const temp = nums[i]
            let j = i;
            while(j-gap>=0 && nums[j-gap]>temp) {
                nums[j] = nums[j-gap]
                j=j-gap
            }

            nums[j]=temp
        } 
    }

    return nums;
}