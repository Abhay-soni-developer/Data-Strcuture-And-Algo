/**
 * @param {string} s
 * @return {number}
 */

const ROMAN_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}

var romanToInt = function (s) {
    if (s.length === 1) {
        return ROMAN_VALUES[s]
    }

    let sum = 0;
    let index = 0;

    while (index < s.length) {
        if (s.substr(index, 2) in ROMAN_VALUES) {
            sum += ROMAN_VALUES[s.substr(index, 2)];
            index += 2;
        } else if (s.substr(index, 1) in ROMAN_VALUES) {
            sum += ROMAN_VALUES[s.substr(index, 1)];
            index += 1;
        }
    }

    return sum;
};