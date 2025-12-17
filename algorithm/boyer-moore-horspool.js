function createHorspoolJumpTable(pat) {
    const map = new Map()

    for (let i = 0; i < pat.length - 1; i++) {
        map.set(pat[i], pat.length - i - 1)
    }

    return map;
}


function boyerMooreHorspool(str, pat) {
    if (str.length < pat.length || pat.length === 0 || str.length === 0) return -1;

    const jumpTable = createHorspoolJumpTable(pat);
    let s = 0;
    let m = str.length, n = pat.length;

    while (s <= m - n) {
        let j = n - 1;

        while (j >= 0 && str[s + j] === pat[j]) {
            j--
        }

        if (j === -1) {
            return s;
        } else {
            s = s + (jumpTable.get(str[s + n - 1]) || n)
        }
    }

    return -1;
}



const tests = [
  // basic / exact
  { text: "abc", pat: "abc", expected: 0 },              // exact match at start
  { text: "zzzzabc", pat: "abc", expected: 4 },          // match at end (off-by-one catcher)
  { text: "abcxyz", pat: "xyz", expected: 3 },           // match at end of window

  // single char
  { text: "aaaaa", pat: "a", expected: 0 },              // single char found
  { text: "bbbb", pat: "a", expected: -1 },              // single char not found

  // overlaps / repetition
  { text: "aaaaa", pat: "aa", expected: 0 },             // overlapping matches exist, first is 0
  { text: "abababab", pat: "baba", expected: 1 },        // periodic pattern

  // not found
  { text: "abcdef", pat: "gh", expected: -1 },           // pattern absent
  { text: "short", pat: "longerpattern", expected: -1 }, // pat longer than text

  // classic / real strings
  { text: "ABAAABCD", pat: "ABC", expected: 4 },         // classic example
  { text: "HERE IS A SIMPLE EXAMPLE", pat: "EXAMPLE", expected: 17 }, // common demo

  // repeated chars inside pattern (jump table overwrite check)
  { text: "THOOTHXXTHOOTH", pat: "THOOTH", expected: 0 }, // repeated pattern
  { text: "xxxxTHOOTH", pat: "THOOTH", expected: 4 },     // match after noise

  // near-match then match
  { text: "abcxabcdabxabcdabcdabcy", pat: "abcdabcy", expected: 15 }, // common benchmark-like
];

// runner
tests.forEach(({ text, pat, expected }, idx) => {
  const got = boyerMooreHorspool(text, pat);
  const ok = got === expected ? "✓" : "✗";
  console.log(
    `#${idx} text="${text}" pat="${pat}" -> got=${got}, expected=${expected} ${ok}`
  );
});