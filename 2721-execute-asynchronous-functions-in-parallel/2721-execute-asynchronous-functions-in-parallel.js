/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let settled = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((result) => {
                results[i] = result;
                console.log(result)
                settled++;
                if (settled === functions.length) {
                    resolve(results)
                }
            }
            ).catch((err) => {
                reject(err)
            })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */