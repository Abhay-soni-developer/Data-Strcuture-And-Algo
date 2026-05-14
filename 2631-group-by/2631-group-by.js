/**
 * @param {Function} fn
 * @return {Object}
 */
// Array.prototype.groupBy = function (fn) {
//     const result = {}
//     this.forEach((item) => {
//         const key = fn(item);
//         if (!result[key]) {
//             result[key] = []
//         }
//         result[key].push(item)
//     })
//     return result;
// };


Array.prototype.groupBy = function (fn) {
    const result = {}
    return this.reduce((result, item) => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(item)
        return result;
    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */