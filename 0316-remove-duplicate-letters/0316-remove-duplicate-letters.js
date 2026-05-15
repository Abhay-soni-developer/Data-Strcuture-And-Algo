/**
 * @param {string} s
 * @return {string}
 */

const removeDuplicateLetters = function (s) {
    const lastIndex = {};
    const seen = new Set();
    const result = [];

    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    console.log(lastIndex)

    for (let i = 0; i < s.length; i++) {
        if (result.length == 0) {
            result.push(s[i])
            seen.add(s[i])
            continue;
        }


        if (!seen.has(s[i])) {
            while (result[result.length - 1] > s[i] && lastIndex[result[result.length - 1]] > i) {
                const el = result.pop()
                seen.delete(el)
            }

            result.push(s[i]);
            seen.add(s[i]);
        }

    }

    return result.join("");
};

