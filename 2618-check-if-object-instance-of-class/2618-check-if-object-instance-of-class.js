/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    if(obj === null || obj === undefined || Number.NaN === obj || classFunction === null || classFunction === undefined) {
        return false;
    }
    
    let proto = obj['__proto__']

    while(proto) {
        if(proto === classFunction.prototype) {
            return true
        }
        proto = proto['__proto__']
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */