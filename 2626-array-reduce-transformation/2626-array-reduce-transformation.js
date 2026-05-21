/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accumulator = init;

    nums.forEach((item)=>{
        accumulator = fn(accumulator, item);
    })

    return accumulator;
};