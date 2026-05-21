/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filtered = []
    
    for(let [index, item] of arr.entries()) {
        const result = fn(item, index)
        if(result) filtered.push(item)
    }

    return filtered
};