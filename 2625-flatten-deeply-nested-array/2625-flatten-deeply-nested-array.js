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

// recursive approach
// var flat = function (arr, n, result = []) {

//     if (n === 0) {
//         for (let item of arr) {
//             result.push(item);
//         }
//         return result;
//     }

//     for (let item of arr) {
//         if (item instanceof Array) {
//             const temp = flat(item, n - 1, result);
//             continue;
//         }
//         result.push(item);
//     }

//     return result;
// };

// non - recursive approach
var flat = function (arr, n) {

    if (n === 0 || arr.length === 0) {
        return arr;
    }

    let result = []
    let stack = []
    stack.push(arr)


    while (stack.length > 0) {
        let current = stack[stack.length - 1]

        if(current.length===0) stack.pop()

        while (current.length > 0) {
            const el = current.pop()

            if (Array.isArray(el) && stack.length - 1 < n) {
                stack.push(el)
                break;
            }

            if (current.length === 0) {
                stack.pop()
            }

            result.push(el)
        }

    }

    return result.reverse();
};