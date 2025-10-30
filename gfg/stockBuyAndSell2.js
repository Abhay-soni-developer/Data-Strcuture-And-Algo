
// brute force
// function maximumProfit(prices) {
//     let maxMin = findLocalMaxMin(prices)
//     let maxProfit = 0



//     for (let i = 0; i <= maxMin.length - 1; i++) {
//         for (let j = i; j <= maxMin.length - 1; j++) {
//             if (maxProfit < prices[maxMin[j][1]] - prices[maxMin[i][0]]) {
//                 maxProfit = prices[maxMin[j][1]] - prices[maxMin[i][0]]
//             }
//         }
//     }

//     return maxProfit;
// }




// using kadane algorithm

// User function Template for javascript
/**
 * @param {number[]} prices
 * @returns {number}
 */

class Solution {
    // Function to find the maximum profit.
    maximumProfit(prices) {
        const arr = []
        
        for(let i=1; i<=prices.length-1; i++) {
            arr.push(prices[i]-prices[i-1])
        }
        
        const profit = kadane(arr)
        
        if(profit>0) {
            return profit
        }
        
        return 0;
    }
}


function kadane(arr) {
    let currentSum=arr[0];
    let maxSum=arr[0];
    
    for(let i=1; i<=arr.length-1; i++) {
        currentSum = Math.max(arr[i], currentSum+arr[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    
    return maxSum;
}



// console.log(maximumProfit([1, 3, 6, 9, 11]))
// console.log("----------------------------")

// console.log(maximumProfit([100, 180, 260, 310, 40, 535, 695]))
// console.log("----------------------------")

// console.log(maximumProfit([2, 5, 0, 5, 9, 4]))
// console.log("----------------------------")

// console.log(maximumProfit([93, 85, 20, 71, 48, 56, 60, 20, 88, 70, 26, 75]))
// console.log("----------------------------")
// console.log(maximumProfit([84, 62, 49, 34, 67, 94, 90, 39, 9, 61, 61, 56, 69, 83, 78]))


console.log("----------------------------")
console.log(maximumProfit([7, 6, 4, 3, 1]))


