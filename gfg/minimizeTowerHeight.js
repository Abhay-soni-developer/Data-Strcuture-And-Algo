// Brute Force
class Solution {
    getMinDiff(arr, k) {
        return findMinDiff(arr, k, 0)
    }
}


function findMinDiff(arr, k, idx) {

    if (idx === arr.length) {
        arr.sort((a, b) => a - b)
        let diff = arr[arr.length - 1] - arr[0]
        return diff
    }

    let arr1 = [...arr]
    arr1[idx] = arr1[idx] + k
    let diff1 = findMinDiff([...arr1], k, idx + 1)

    let arr2 = [...arr]
    arr2[idx] = arr2[idx] - k
    let diff2 = Infinity
    if (arr2[idx] >= 0) {
        diff2 = findMinDiff([...arr2], k, idx + 1)
    }

    return diff1 <= diff2 ? diff1 : diff2

}


// brute but better more memory optimized

class Solution {
    getMinDiff(arr, k) {
        const sortedArray = arr.sort((a,b)=>a-b)
        let bestDiff = sortedArray[sortedArray.length-1]-sortedArray[0];
        
        for(let i=0; i<arr.length; i++) {
            let tarr = [...sortedArray]
            
            for(let j=0; j<arr.length; j++) {
                
                while(j<i) {
                    tarr[j]+=k
                    j++;
                }
                
                if(tarr[j]-k<0) {
                    tarr[j]+=k
                    continue;
                } 
                
                tarr[j]-=k
            }
            
            tarr = tarr.sort((a,b)=>a-b)
            bestDiff = Math.min(bestDiff, tarr[tarr.length-1]-tarr[0])
        }
        
        return bestDiff;
    }
}


console.log(getMinDiff([1,5,8,10], 2))


class Solution {
    getMinDiff(arr, k) {
        const len = arr.length;
        const sortedArr = arr.sort((a,b)=>a-b)
        let diff = sortedArr[len-1]-sortedArr[0]
        
        for(let i=1; i<len; i++) {
            if(sortedArr[i]-k<0) continue;
            
            const minH = Math.min(sortedArr[0]+k, sortedArr[i]-k)
            const maxH = Math.max(sortedArr[len-1]-k, sortedArr[i-1]+k)
            
            diff  = Math.min(diff, maxH-minH)
        }
        
        return diff;
    }
}

