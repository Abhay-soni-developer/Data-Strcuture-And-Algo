/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2)

    while (start <= end) {

        if (arr[mid] === k) {
            return mid
        } else if (arr[mid] < k) {
            start = mid + 1
        } else if (arr[mid] > k) {
            end = mid - 1;
        }

        mid = Math.floor((start + end) / 2)
    }

    return start
};