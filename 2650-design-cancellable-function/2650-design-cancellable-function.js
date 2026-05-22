/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
    let settled = false;
    let cancel;

    let promise = new Promise((resolve, reject) => {

        cancel = function () {
            step(generator.throw, 'Cancelled')
        }

        async function step(method, value) {
            if (settled) return;

            let result;

            try {
                result = method.call(generator, value);
            } catch (err){
                settled = true
                reject(err)
                return;
            }

            try {
                if (!result.done) {
                    const newValue = await result.value
                    step(generator.next, newValue)
                    return;
                }
                settled = true
                resolve(result.value)
                return;
            } catch (err) {
                step(generator.throw, err)
            }
        }

        step(generator.next)
    })

    return [cancel, promise]
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */