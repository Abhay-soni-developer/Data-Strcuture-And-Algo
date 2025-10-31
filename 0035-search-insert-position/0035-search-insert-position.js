/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === k) {
            return mid
        } else if (arr[mid] < k) {
            start = mid + 1
        } else if (arr[mid] > k) {
            end = mid - 1;
        }
    }

    return start
};