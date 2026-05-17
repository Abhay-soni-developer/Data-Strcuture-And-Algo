/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const placeholder = Symbol('placeholder')
    const cache = { result: placeholder, map: new Map() };

    return function (...args) {
        let node = cache;
        let i = 0
        while (i < args.length) {
            if (node.map.has(args[i])) {
                node = node.map.get(args[i]);
                i++;
            } else {
                break;
            }
        }

        if (i === args.length) {
            if (node.result !== placeholder) return node.result;
            const result = fn(...args);
            node.result = result;
            return result;
        }

        while (i < args.length) {
            const newNode = { result: placeholder, map: new Map() };
            node.map.set(args[i], newNode)
            node = newNode;
            i++
        }

        const result = fn(...args);
        node.result = result;
        return result;

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */