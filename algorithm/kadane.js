function kadane(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0]

    for (let i = 1; i <= arr.length - 1; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum;

}



console.log(kadane([1, 2, 3, -2, 5]));
maxSum = 9, window = [0, 4]

console.log(kadane([-1, -2, -3, -4]));
// maxSum = -1, window = [0, 0]

console.log(kadane([4, -1, 2, 1, -5, 4]));
// maxSum = 6, window = [0, 3]

console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// maxSum = 6, window = [3, 6]

console.log(kadane([5, -2, 3, 4]));
// maxSum = 10, window = [0, 3]