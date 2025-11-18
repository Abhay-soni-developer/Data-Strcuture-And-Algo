class Solution {
    missingNumber(arr) {
        let dic = new Map()

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                dic.set(arr[i], true)
            }
        }
        let i = 1

        while (dic.get(i)) {
            i++;
        }

        return i
    }
}


// optimized 
class Solution {
    missingNumber(arr) {
        let n = arr.length;
        let i = 0;

        while (i < n) {
            while (arr[i] > 0 && arr[i] <= n && arr[i] !== i + 1) {
                if (arr[arr[i] - 1] === arr[i]) break;
                let temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
            i++
        }

        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return i + 1
            }
        }

        return n + 1
    }
}

missingNumber([2, -3, 4, 1, 1, 7])