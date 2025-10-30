function findLocalMaxMin(arr) {
    const localMaxMin = []

    for (let i = 1; i <= arr.length - 1; i++) {
        while (i <= arr.length - 1 && arr[i - 1] > arr[i]) {
            i++;
        }

        let min = i - 1;

        while (i <= arr.length - 1 && arr[i - 1] <= arr[i]) {
            i++;
        }

        localMaxMin.push([min, i - 1])

    }

    return localMaxMin
}


// console.log(findLocalMaxMin([100, 50, 60, 10, 20, 5, 1000]))
// console.log(findLocalMaxMin([10, 8, 8, 8, 9, 9, 20]))



// console.log(findLocalMaxMin([10, 8, 8, 8, 9, 9, 20]));
// // your fn likely: [ [1, 6] ]
// // should be:      [ [1, 6] ]

// console.log(findLocalMaxMin([9, 5, 5, 5, 100]));
// // your fn likely: [ [1, 4] ]
// // should be:      [ [1, 4] ]

// console.log(findLocalMaxMin([100, 50, 60, 10, 20, 5, 1000]));
// // your fn likely: [ [1, 2], [3, 4], [5, 6] ]
// // should be:      [ [1, 2], [3, 4], [5, 6] ]

// console.log(findLocalMaxMin([100, 50, 60, 10, 20, 5, 1000, 999, 1001]));
// // your fn likely: [ [1, 2], [3, 4], [5, 8] ]
// // should be:      [ [1, 2], [3, 4], [5, 6], [7, 8] ]

// console.log(findLocalMaxMin([9, 8, 7, 6, 5]));
// // your fn likely: [ [4, 4], [4, 4], [4, 4], ... ]
// // should be:      [ [4, 4] ]