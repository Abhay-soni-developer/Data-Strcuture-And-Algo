// my brute force solution

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    maxProduct(arr) {
        if (arr.length === 1) return arr[0]

        let max = -Infinity

        for (let i = 1; i <= arr.length; i++) {
            max = Math.max(max, windowProd(arr, i))
        }

        return max
    }
}


function windowProd(arr, size) {
    let max = -Infinity

    for (let i = 0; i <= arr.length - size; i++) {

        let k = i
        let prod = 1;

        while (k < i + size) {
            prod *= arr[k]
            k++;
        }

        max = Math.max(max, prod)
    }

    return max
}


//  my optimized solution

/**
 * @param {number[]} arr
 * @return {number}
 */


function maxProduct(arr) {
    if (arr.length === 1) return arr[0]

    let i = 0;
    let j = 0;
    let max = -Infinity

    while (j < arr.length) {
        while (j < arr.length && arr[j] !== 0) {
            j++;
        }
        if (arr[j] === 0) {
            max = Math.max(0, max)
        }
        max = Math.max(max, findMaxProduct(arr.slice(i, j)))
        i = j + 1;
        j = i;
    }

    return max
}


function findMaxProduct(arr) {
    if (arr.length === 1) return arr[0]
    let max = -Infinity;
    let larr = leftSideProductArray(arr)
    let rarr = rightSideProductArray(arr)

    let lMaxProd = larr[larr.length - 1]
    let i = 0
    
    while (lMaxProd < 0) {
        lMaxProd /= arr[i]
        i++
    }

    let rMaxProd = rarr[0]
    let j = arr.length - 1
    
    while (rMaxProd < 0) {
        rMaxProd /= arr[j]
        j--
    }

    return Math.max(lMaxProd, rMaxProd)
}

console.log(maxProduct([10, 4, 3, -7, -4, -5, 2]))


function leftSideProductArray(arr) {
    const larr = []
    for (let i = 1; i < arr.length; i++) {
        if (i === 1) {
            larr.push(arr[i] * arr[i - 1])
            continue;
        }
        larr.push(arr[i] * larr[larr.length-1])
    }
    return larr;
}


function rightSideProductArray(arr) {
    const rarr = []
    for (let i = arr.length - 2; i >= 0; i--) {
        if (i === arr.length - 2) {
            rarr.unshift(arr[i] * arr[i + 1])
            continue;
        }
        rarr.unshift(arr[i] * rarr[0])
    }
    return rarr;
}


// actual optimized approach

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    maxProduct(arr) {
        let currentMin = arr[0];
        let currentMax = arr[0];
        let max = arr[0];
        
        
        for(let i=1; i<arr.length; i++) {
            if(arr[i]<0) {
                [currentMin, currentMax] = [currentMax, currentMin]
            } else if (arr[i]===0) {
                [currentMin, currentMax] = [0, 0]
            }
            
            currentMin = Math.min(arr[i]*currentMin, arr[i])
            currentMax = Math.max(arr[i]*currentMax, arr[i])
            max=Math.max(currentMax, max)
        }
        
        return max
    }
}