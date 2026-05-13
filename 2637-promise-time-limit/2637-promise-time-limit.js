/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function (fn, t) {
//     return async function (...args) {
//         return new Promise((resolve, reject) => {
//             const token = setTimeout(() => {
//                 reject("Time Limit Exceeded");
//             }, t)

//             fn(...args).then((result) => {
//                 resolve(result)
//             }).catch(err => {
//                 reject(err)
//             }).finally(() => {
//                 clearTimeout(token)
//             })


//         })
//     }
// };

var timeLimit = function (fn, t) {
    return function (...args) {
        let token;
        const timeout = new Promise((_, reject) => {
            token = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t)
        })


        return Promise.race([timeout, fn(...args)])
            .then((result) => result)
            .catch(err => Promise.reject(err))
            .finally(() => clearTimeout(token))
    }

}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */