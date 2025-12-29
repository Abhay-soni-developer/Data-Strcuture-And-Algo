
function lowerbound(arr, target) {
    let [low, high] = [0, arr.length]

    while (low < high) {
        let mid = (low + high) >> 1
        if (arr[mid] >= target) high = mid;
        else low = mid + 1
    }

    return low
}


const tests = [
    // Basic increasing
    { arr: [1, 3, 5, 7, 9], target: 5, expected: 2 },
    { arr: [1, 3, 5, 7, 9], target: 6, expected: 3 },

    // Insert at beginning
    { arr: [10, 20, 30], target: 5, expected: 0 },

    // Insert at end
    { arr: [10, 20, 30], target: 40, expected: 3 },

    // Duplicates: return first >= target
    { arr: [2, 4, 4, 4, 7, 9], target: 4, expected: 1 },
    { arr: [2, 4, 4, 4, 7, 9], target: 3, expected: 1 },
    { arr: [2, 4, 4, 4, 7, 9], target: 8, expected: 5 },

    // All equal elements
    { arr: [5, 5, 5, 5], target: 5, expected: 0 },
    { arr: [5, 5, 5, 5], target: 6, expected: 4 },
    { arr: [5, 5, 5, 5], target: 1, expected: 0 },

    // Negative numbers
    { arr: [-10, -5, 0, 5], target: -7, expected: 1 },
    { arr: [-10, -5, 0, 5], target: -10, expected: 0 },
    { arr: [-10, -5, 0, 5], target: -20, expected: 0 },
    { arr: [-10, -5, 0, 5], target: 10, expected: 4 },

    // Single element arrays
    { arr: [10], target: 5, expected: 0 },
    { arr: [10], target: 10, expected: 0 },
    { arr: [10], target: 20, expected: 1 },

    // Empty array
    { arr: [], target: 5, expected: 0 },

    // Very large values
    { arr: [1, 100, 1000, 10000], target: 999, expected: 2 },
    { arr: [1, 100, 1000, 10000], target: 10000, expected: 3 },
    { arr: [1, 100, 1000, 10000], target: 50000, expected: 4 },
];

// tests.forEach(({ arr, target, expected }, idx) => {
//     const result = lowerbound(arr, target);
//     console.log(
//         `#${idx + 1} | arr=${JSON.stringify(arr)}, target=${target} → got=${result}, expected=${expected} |`,
//         result === expected ? "✔️ PASS" : "❌ FAIL"
//     );
// });


console.log(lowerbound([1, 3, 5], 4))