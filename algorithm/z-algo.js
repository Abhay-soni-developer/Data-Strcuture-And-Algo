// creating z array (brute force approach)

function buildZBrute(str) {
    let Z = new Array(str.length).fill(0)

    for (let i = 1; i < str.length; i++) {
        let pt = 0;
        let j = i;

        while (j < str.length && str[pt] === str[j]) {
            pt++;
            j++;
        }

        Z[i] = pt;
    }

    return Z
}

// my version of z-brute
function buildZ(str) {
    let l = r = 0;
    const Z = new Array(str.length).fill(0)

    for (let i = 1; i < str.length; i++) {
        if (i > r) {
            l = r = i
            while (r < str.length && str[r] === str[r - l]) {
                r++;
            }
            Z[i] = r - l
        } else {
            if (Z[i - l] + i < r) {
                Z[i] = Z[i - l]
            } else {
                l = i;
                while (r < str.length && str[r] === str[r - l]) {
                    r++;
                }

                Z[l] = r - l;
            }
        }
    }

    return Z
}


// --- TEST CASES (all with Z[0] = 0) ---

const testCases = [
    // From cp-algorithms / standard Z examples
    {
        input: "aaaaa",
        expected: [0, 4, 3, 2, 1]           // classic example
    },
    {
        input: "aaabaab",
        expected: [0, 2, 1, 0, 2, 1, 0]     // classic example
    },
    {
        input: "abacaba",
        expected: [0, 0, 1, 0, 3, 0, 1]     // classic example
    },

    // From USACO / guides (they use Z[0] = n, we adjusted to 0 here)
    {
        input: "aabxaayaab",
        // original example: [10,1,0,0,2,1,0,3,1,0]
        // with Z[0] = 0 →:
        expected: [0, 1, 0, 0, 2, 1, 0, 3, 1, 0]
    },

    // Your earlier strings, now with correct Z-values for Z[0] = 0
    {
        input: "abababa",
        expected: [0, 0, 5, 0, 3, 0, 1]     // prefix "ab" repeating pattern
    },
    {
        input: "abcab",
        expected: [0, 0, 0, 2, 0]           // "ab" matches starting at index 3
    },
    {
        input: "xyz",
        expected: [0, 0, 0]                 // no prefix repetition
    },
    {
        input: "aaaaabaaaab",
        // length 11 string, so 11-length Z:
        expected: [0, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0]
    },
    {
        input: "leetcodeleetcode",
        // length 11 string, so 11-length Z:
        expected: [0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0]
    }
];


// --- EXECUTION LOOP ---
testCases.forEach(({ input, expected }) => {
    const result = buildZBrute(input);
    const ok = JSON.stringify(result) === JSON.stringify(expected);

    console.log(
        `${input.padEnd(12)} → ${JSON.stringify(result)}  ` +
        (ok ? "✓ MATCH" : `✗ EXPECTED: ${JSON.stringify(expected)}`)
    );
});