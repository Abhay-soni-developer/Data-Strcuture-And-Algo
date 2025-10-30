// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
// Note: You need to solve this problem without utilizing the built-in sort function.

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    // using counting sort to solve this problem
    // as we know the range of elements
    sort012(arr) {
        const frequencyCounter = [0,0,0]        
        
        for(let el of arr) {
            frequencyCounter[el]=frequencyCounter[el]+1  
        }
        
        let i=0;
        let counter=0;
        
        while(i<=arr.length-1) {
            while(frequencyCounter[counter]>0) {
                arr[i]=counter;
                frequencyCounter[counter]=frequencyCounter[counter]-1;
                i++;
            }
            counter++;
        }
        
        return arr;
    }
}


