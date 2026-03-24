/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const arr = []

    for (let sym of s) {
        switch (sym) {
            case ")":
                if (arr[arr.length - 1] === "(") {
                    arr.pop()
                } else {
                    return false
                }
                break;
            case "}":
                if (arr[arr.length - 1] === "{") {
                    arr.pop()
                } else {
                    return false
                }
                break;
            case "]":
                if (arr[arr.length - 1] === "[") {
                    arr.pop()
                } else {
                    return false
                }
                break;
            default:
                arr.push(sym)
        }
    }

    console.log(arr)

    return arr.length === 0 ? true : false
};