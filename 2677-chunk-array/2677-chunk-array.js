/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const result = [];
    let i = 0;

    while (i < arr.length) {
        let chunk = []
        let chunkSize = 0;
        while (i < arr.length && chunkSize < size) {
            chunk.push(arr[i])
            i++
            chunkSize++
        }
        result.push(chunk)
    }

    return result
};
