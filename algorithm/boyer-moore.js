// boyer moore - bad charcater heuristic

function buildLastOccur(pattern) {
    const map = new Map();

    for (let i = 0; i < pattern.length; i++) {
        map.set(pattern[i], i)
    }

    return map;
}


function bmbc(str, pat) {

    if (pat.length === 0 || str.length < pat.length) {
        return -1
    }

    const lastOccurenceTable = buildLastOccur(pat)

    let s = 0;

    while (s <= str.length - pat.length) {
        let j = pat.length - 1;
        while (j >= 0 && str[s + j] === pat[j]) {
            j--
        }

        if (j === -1) {
            return s
        } else {
            const bad = lastOccurenceTable.get(str[s + j])
            if (bad === undefined) {
                s = s + j + 1
            } else {
                s = s + Math.max(1, j - bad)
            }
        }
    }


    return -1;
}




const tests = [
    { text: "ABAAABCD", pat: "ABC", expected: 4 },       // classic
    { text: "aaaaa", pat: "aa", expected: 0 },           // repeats / overlap
    { text: "aaaaa", pat: "aaaa", expected: 0 },         // near full
    { text: "abcdef", pat: "gh", expected: -1 },         // not found
    { text: "abc", pat: "abc", expected: 0 },            // full match
    { text: "abc", pat: "c", expected: 2 },              // single char
    { text: "abc", pat: "a", expected: 0 },              // first char
    { text: "abc", pat: "bc", expected: 1 },             // suffix match
    { text: "aaaaab", pat: "aab", expected: 3 },         // mismatch then match
    { text: "HERE IS A SIMPLE EXAMPLE", pat: "EXAMPLE", expected: 17 }, // classic BM demo
];


tests.forEach(({ text, pat, expected }, idx) => {
    const got = bmbc(text, pat);
    console.log(`#${idx} text="${text}" pat="${pat}" -> got=${got}, expected=${expected}`);
});