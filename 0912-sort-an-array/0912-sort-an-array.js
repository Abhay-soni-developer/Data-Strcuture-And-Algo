/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let gap = nums.length>>1

    while(gap>1) {
        sort(nums, gap)
        gap=gap>>1
    }

    if(gap===1) {
        return insertionSort(nums);
    }

    return nums;
};

function sort(arr, gap) {
    let i = 0

    while (gap + i < arr.length) {
        if (arr[i] > arr[gap + i]) {
            [arr[i], arr[gap + i]] = [arr[gap + i], arr[i]]
        }
        i++;
    }

    return arr;
}


function insertionSort(arr) {
    let i=1;

    while(i<arr.length) {
        let j=i-1
        let flag = true;

        while(j>=0 && flag) {
            if(arr[j]>arr[i]) {
                j--;
                continue;
            }
            flag = false
            rotate(arr, j+1, i)
        }

        if(j===-1) {
            rotate(arr, 0, i)
        }

        i++;
    }

    return arr;

}


function rotate(arr, i, j) {
    const el = arr[j]
    
    while(j>i) {
        arr[j]=arr[j-1]
        j--
    }

    arr[i] = el
}

