function upperbound(arr, target) {
    let [low, high] = [0, arr.length]

    while (low < high) {
        let mid = (low + high) >> 1
        if (arr[mid] > target) high = mid;
        else low = mid + 1
    }

    return low
}