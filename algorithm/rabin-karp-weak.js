// only for lowercase alphabets

function generateHash(str = "") {
    let hash = 0

    for (let i = 0; i < str.length; i++) {
        hash += (str.charCodeAt(i) - 96) * (str.length ** i)
    }

    return hash
}


function* rollingHash(str = "", windowSize = 1) {
    if (str.length < windowSize) {
        throw new Error("string size is less than window size")
    }

    let hash = generateHash(str.slice(0, windowSize));
    const highestPowerMultiplier = windowSize ** (windowSize - 1)

    yield hash;

    for (let i = 1; i < str.length - windowSize + 1; i++) {
        hash = hash - (str.charCodeAt(i - 1) - 96);
        hash = hash / windowSize;
        hash = hash + ((str.charCodeAt(i + windowSize - 1) - 96) * highestPowerMultiplier);
        yield hash;
    }

    return true
}

function rabinKarp(text, pat) {
    const patHash = generateHash(pat)
    const rh = rollingHash(text, pat.length)

    for (let hash of rh) {
        if (hash === patHash) {
            rh.return()
            return true
        }
    }

    return false;
}

const tests = [
    // basic / edge cases
    { input: "", expected: 0, desc: "empty string" },
    { input: "a", expected: 1, desc: "single char a" },
    { input: "b", expected: 2, desc: "single char b" },
    { input: "z", expected: 26, desc: "single char z" },

    // length 2
    { input: "aa", expected: 3, desc: "1*2^0 + 1*2^1" },
    { input: "ab", expected: 5, desc: "1*2^0 + 2*2^1" },
    { input: "ba", expected: 4, desc: "2*2^0 + 1*2^1" },

    // length 3
    { input: "abc", expected: 34, desc: "1*3^0 + 2*3^1 + 3*3^2" },
    { input: "aaa", expected: 13, desc: "1*(3^0+3^1+3^2)" },
    { input: "aba", expected: 16, desc: "1*3^0 + 2*3^1 + 1*3^2" },

    // length 4
    { input: "abba", expected: 105, desc: "1*4^0 + 2*4^1 + 2*4^2 + 1*4^3" },
    { input: "zzzz", expected: 2210, desc: "26*(4^0+4^1+4^2+4^3)" },

    // different permutations
    { input: "abcd", expected: 313, desc: "1*4^0 + 2*4^1 + 3*4^2 + 4*4^3" },
    { input: "bcda", expected: 142, desc: "2*4^0 + 3*4^1 + 4*4^2 + 1*4^3" },

    // more random
    { input: "xyz", expected: 333, desc: "24*3^0 + 25*3^1 + 26*3^2" },
    { input: "aaaaa", expected: 781, desc: "sum 5^0..5^4" },
];

// tests.forEach(t => {
//     const result = generateHash(t.input);
//     console.log(
//         `Case "${t.input}" (${t.desc}) → Expected: ${t.expected}, Got: ${result}`,
//         result === t.expected ? "✓" : "✗"
//     );
// });


console.log(rabinKarp("abcdefghi", "def"))
console.log(rabinKarp("abcdefghi", "dei"))
