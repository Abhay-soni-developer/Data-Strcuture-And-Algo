/**
 * @param {number[]} arr
 * @returns {number}
 */

function inversionCount(arr) {
    let rightWaySorted = []
    let count = 0;

    while (arr.length > 0) {
        const el = arr.pop();

        for (let i = 0; i < rightWaySorted.length; i++) {
            if (el > rightWaySorted[i]) {
                count++;
            }
        }

        rightWaySorted = putElementInSortedArray(rightWaySorted, el)
        console.log(rightWaySorted)
    }

    return count;
}




function putElementInSortedArray(arr, el) {
    if (arr.length === 0) {
        arr.push(el)
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (el > arr[i] && arr.length - 1 === i) {
            arr.push(el)
        } else if (arr[i] > el) {
            arr = [
                ...arr.splice(0, i),
                el,
                ...arr
            ]
            break;
        }
    }

    return arr;
}


let a = [95, 13, 47, 52, 41, 68, 42]

console.log(inversionCount(a))
