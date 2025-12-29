// string matching algorithm
function genLps(pat) {
    let i = 1;
    let len = 0;
    const res = new Array(pat.length).fill(0)

    while (i < pat.length) {
        if (pat[i] === pat[len]) {
            len++;
            res[i] = len;
            i++;
        } else if (len === 0) {
            i++;
        } else {
            len = res[len - 1]
        }

    }

    return res
}


function kmp(str, pat) {

    if (pat.length === 0) return true
    if (str.length < pat.length) return false;

    let i = 0;
    let j = 0;

    const lps = genLps(pat);
    console.log(lps)

    while (i < str.length) {
        if (str[i] === pat[j]) {
            i++;
            j++;

            if (j === pat.length) {
                return true
            }
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1]
            }
        }
    }

    return false
}


const kmpTests = [
    ["", ""],                  // true (empty pattern matches trivially)
    ["abc", ""],              // true (empty pattern always matches)
    ["", "a"],                // false (pattern bigger than string)

    ["abcde", "abc"],         // true (match at start)
    ["abcde", "de"],          // true (match at end)
    ["abcde", "c"],           // true (single char match)

    ["abcde", "xyz"],         // false (no match)
    ["aaaaa", "aaa"],         // true (repeated chars, multiple placements)

    ["abxabcabcaby", "abcaby"],  // true (classic KMP match)
    ["abxabcabcaby", "abcabz"],  // false (almost match, but fails)

    ["ababababa", "ababa"],   // true (overlapping pattern)
    ["abababab", "bab"],      // true

    ["mississippi", "issi"],   // true
    ["mississippi", "issip"],  // true
    ["mississippi", "issipi"], // false

    ["abcdefabcdef", "cdef"], // true (repeated pattern in text)
    ["abcdefabcdef", "efab"], // true (wrap re-match)

    ["aAaAaA", "AaA"],        // true (case sensitive)
    ["aAaAaA", "aaa"],        // false (case mismatch)

    ["😂😂😂😂", "😂😂"],     // true (emoji match) – JS treats them as surrogate pairs but pattern still detectable

    ["@#*$@#*$", "@#*$"],      // true (special characters)
    ["@#*$@#*$", "$@#"],       // true (middle match)

    ["hello", "ll"],
    ["ababcaababcaabc", "ababcaabc"],
    ["aaac", "aac"]
];

kmpTests.forEach(([str, pat]) => {
    console.log(
        `"${str}" contains "${pat}"? =>`,
        kmp(str, pat)
    );
});

const tests = [
    "",            // []
    "a",           // [0]
    "aa",          // [0,1]
    "ab",          // [0,0]
    "aaa",         // [0,1,2]
    "abc",         // [0,0,0]
    "aba",         // [0,0,1]
    "abab",        // [0,0,1,2]
    "ababaca",     // [0,0,1,2,3,0,1]
    "aabaaa",      // [0,1,0,1,2,2]
    "abcdabca",    // [0,0,0,0,1,2,3,1]
    "abcabxabc",   // [0,0,0,1,2,0,1,2,3]
    "aacecaaa",    // [0,1,0,0,0,1,2,2]
    "aaabaaa",     // [0,1,2,0,1,2,3]
    "aaaaaaaa",    // [0,1,2,3,4,5,6,7]
    "abababab",    // [0,0,1,2,3,4,5,6]
    "abcabcabc",   // [0,0,0,1,2,3,4,5,6]
    "a*b*a*b*a",   // [0,0,0,1,0,1,2,3,4]
    "aAaAaA",       // [0,0,1,2,3,4]
    "ababcaabc",
    "abcabcabcabc"
];

tests.forEach(t => {
    console.log(t, "=>", genLps(t));
});