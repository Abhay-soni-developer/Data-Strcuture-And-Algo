
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    if (start === end) {
        if (nums[start] >= target) {
            return 0;
        }
        return 1;
    }

    if (target < nums[start] || target === nums[start]) {
        return 0;
    } else if (target > nums[end]) {
        return end + 1;
    }

    let mid = Math.floor((end + start) / 2)

    while (start !== end) {

        console.log(start, mid, end)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid;
            mid = Math.floor((end + start) / 2)
        } else if (nums[mid] < target) {
            start = mid;
            mid = Math.floor((end + start) / 2)
        }

        // element does not exist or start/end is the element
        if (start === mid) {
            console.log(start, mid, end)
            if (nums[start] === target) {
                return start
            } else if (nums[end] === target) {
                return end
            } else {
                return start + 1
            }
        }

    }

    return mid;
};
