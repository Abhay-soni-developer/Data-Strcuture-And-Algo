// not in place uses o(n) space and o(n) runtine
class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
        let result = new Array(arr.length);
        
        for(let i=0; i<arr.length-1; i++) {
            if(i+d>arr.length-1) {
               for(let k=0; k<d; k++) {
                   result[i]=arr[k];
                   i++
                }
                continue;
            }
            result[i] = arr[i+d]
        }
        
        return result
    }
}

// has to use an extra array space complexity push to O(n)
class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        if(d>arr.length) {
            d=d%arr.length;
        }
        let temp = [...arr].splice(0,d) 
        
        for(let i=0; i<=arr.length-1; i++) {
            if(i+d>arr.length-1) {
                for(let k=0; k<d; k++, i++) {
                    arr[i]=temp[k]
                }
            } else {
                arr[i]=arr[i+d]
            }
        }
    }
}

// inplace algo

function reverseArray(arr, start, end) {
    while(start<end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }

    return arr;
}



function rotateArr(arr, d) {
    if(d>arr.length) d=d%arr.length
    if(d===0) return;

    reverseArray(arr, 0,d-1)
    reverseArray(arr, d, arr.length-1)
    reverseArray(arr, 0, arr.length-1)
}