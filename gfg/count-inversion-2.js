function inversionCount(arr) {
    let rightWaySorted = []
    let count = 0;

    while (arr.length > 0) {
        const el = arr.pop();
        const index = lowerbound(rightWaySorted, el)
        count=count+index;
        rightWaySorted = putElement(rightWaySorted, index, el)
    }

    return count;
}


function putElement(arr, i, el) {
    return [
        ...arr.slice(0, i),
        el,
        ...arr.slice(i, arr.length)
    ]
}

function lowerbound(arr, target) {
    let [low, high] = [0, arr.length]

    while (low < high) {
        const mid = (low + high) >> 1

        if (arr[mid] >= target) high = mid;
        else low = mid + 1
    }

    return low
}

function inversionCount3(arr) {
    let rightWaySorted = []
    let count = 0;

    while (arr.length > 0) {
        const el = arr.pop();
        const index = lowerbound(rightWaySorted, el)
        count=count+index;
        rightWaySorted = putElement(rightWaySorted, index, el)
    }

    return count;
}


let arr = [2, 4, 1, 3, 5]
console.log(inversionCount3(arr))