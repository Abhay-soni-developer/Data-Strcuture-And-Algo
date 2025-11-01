/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = []
    const range = []

    for(let i=0; i<=nums.length-1; i++) {
        
        if(range.length===0) {
            range.push(nums[i])
        }

        if(nums[i+1]-nums[i]!==1) {
            range.push(nums[i])
            if(range[0]===range[1]) {
                result.push(`${range.pop()}`)
                range.pop()
                continue;
            } else {
                result.push(`${range.shift()}->${range.shift()}`)
            }
        }

    }

    if(range.length===1) {
        result.push(`${range.pop()}`)
    }

    return result;
};