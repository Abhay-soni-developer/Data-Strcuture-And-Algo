/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memo = new Map()
    return function(...args) {
        if(!memo.has(fn)) {
            memo.set(fn, new Map())
        }

        const cache = memo.get(fn);
        if(cache.has(args.toString())) {
            return cache.get(args.toString())
        } else {
            const result  = fn(...args)
            cache.set(args.toString(), result)
            return result;
        }

        
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