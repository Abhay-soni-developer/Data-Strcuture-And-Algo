/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
// var flat = function (arr, n) {
//     let result = []
//     if (n === 0) {
//         return arr;
//     }

//     for (let item of arr) {
//         if (item instanceof Array) {
//             const temp = flat(item, n-1, result);
//             result=[...result, ...temp]
//             continue;
//         }
//         result.push(item);
//     }

//     return result;
// };


var flat = function (arr, n, result = []) {

    if (n === 0) {
        for (let item of arr) {
            result.push(item);
        }
        return result;
    }

    for (let item of arr) {
        if (Array.isArray(item)) {
            const temp = flat(item, n - 1, result);
            continue;
        }
        result.push(item);
    }

    return result;
};