/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    if (obj === null || obj === undefined || classFunction === null || classFunction === undefined) {
        return false;
    }

    let proto = Object.getPrototypeOf(obj)

    while (proto) {
        if (proto === classFunction.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */