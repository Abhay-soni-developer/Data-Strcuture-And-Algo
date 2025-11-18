// unoptimized 

class Solution {
    maxCircularSum(arr) {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            max = Math.max(kadane(arr), max)
            let temp = arr.pop()
            arr.unshift(temp)
        }
        return max
    }
}


function kadane(arr) {
    let csum = arr[0];
    let max = arr[0];


    for (let i = 1; i < arr.length; i++) {
        csum = Math.max(arr[i], csum + arr[i])
        max = Math.max(max, csum)
    }

    return max;
}

// the optimized way 



function maxCircularSum(arr=[]) {
    let summation = arr.reduce((a, c) => a + c, 0)
    let minSum = findMinSubArray(arr)
    let maxSum = findMaxSubArray(arr)

    return Math.max(maxSum, summation - minSum)
}


function findMaxSubArray(arr) {
    let csum = arr[0]
    let maxSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        csum = Math.max(arr[i], csum + arr[i])
        maxSum = Math.max(maxSum, csum)
    }

    return maxSum;
}


function findMinSubArray(arr) {
    let csum = arr[0]
    let minSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        csum = Math.min(arr[i], csum + arr[i])
        minSum = Math.min(minSum, csum)
    }

    return minSum;
}




console.log(maxCircularSum([-4, -2, -1, -2, -6]))