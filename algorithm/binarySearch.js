
// loop approach
function binarysearch(arr, k) {
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
}


// iterative approach
function bs(nums, target, start, end) {
    if (start === undefined) {
        start = 0;
        end = nums.length - 1
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        }

    }

    return start
}