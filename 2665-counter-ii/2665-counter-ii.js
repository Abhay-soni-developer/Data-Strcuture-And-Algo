/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let counter = init;

    function increment() {
        return ++counter;
    }

    function reset() {
        counter = init;
        return counter;
    }

    function decrement() {
        return --counter;
    }

    return {
        increment,
        decrement,
        reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */