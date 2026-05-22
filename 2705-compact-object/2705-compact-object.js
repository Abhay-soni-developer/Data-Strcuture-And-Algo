/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    let result;

    if (Array.isArray(obj)) {
        result = []
        for (let key in obj) {
            let value = obj[key];
            if (value) {
                if (typeof obj[key] === 'object') {
                    value = compactObject(obj[key])
                }
                if (value) {
                    result.push(value)
                }
            }
        }
    } else {
        result = {}
        for (let key in obj) {
            let value = obj[key];
            if (value) {
                if (typeof value === 'object') {
                    value = compactObject(obj[key])
                }
                if (value) {
                    result[key] = value;
                }
            }
        }
    }

    return result;
};