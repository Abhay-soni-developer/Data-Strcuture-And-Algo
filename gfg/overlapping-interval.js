class Solution {
    mergeOverlap(arr) {
        arr.sort((a, b) => a[0] - b[0])
        const result = []

        for (let i = 0; i < arr.length; i++) {
            let j = i;
            let largestEnd = arr[i][1]

            while (j + 1 < arr.length && largestEnd >= arr[j + 1][0]) {
                j++;
                largestEnd = Math.max(largestEnd, arr[j][1])
            }

            result.push([arr[i][0], largestEnd])
            i = j;
        }

        return result;
    }
}