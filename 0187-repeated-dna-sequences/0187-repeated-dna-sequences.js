// /**
//  * @param {string} s
//  * @return {string[]}
//  */

// const B = 131
// const M = 1_000_000_007

// BPowers = [1]

// function BPower(power) {

//     if (BPowers[power]) {
//         return BPowers[power]
//     }

//     let i = BPowers.length;

//     while (i <= power) {
//         BPowers[i] = (BPowers[i - 1] * B) % M
//         i++;
//     }

//     return BPowers[power]
// }

// const toVal = (c = "") => c.charCodeAt(0) - 64

// function* rollingHash(str, size) {
//     let lastComputedHash = 0;
//     BPower(size + 1)

//     for (let i = 0; i <= str.length - size; i++) {
//         if (i === 0) {
//             lastComputedHash = str.slice(0, size).split('').reduce((a, c, index) => {
//                 return ((toVal(c) * BPower(size - (index + 1))) + a) % M
//             }, 0)
//         } else {
//             let hash = lastComputedHash - (((toVal(str[i - 1]) * BPower(size - 1))) % M)
//             hash = (hash + M) % M
//             hash = (hash * B) % M
//             hash = (hash + toVal(str[i + size - 1])) % M
//             lastComputedHash = hash
//         }

//         yield {hash: lastComputedHash, val: str.slice(i, i+size)};
//     }

//     return true
// }

// function rabinKarp(text) {
//     const set = new Set()
//     const res = new Set()

//     const rh = rollingHash(text, 10)
//     let i = 0;

//     for (let val of rh) {  
//         if(set.has(val.hash)) {
//             res.add(val.val)
//         } else {
//             set.add(val.hash)
//         }
//     }

//     const result = []
    
//     for (let s of res.values()) {
//         result.push(s)
//     }

//     return result;
// }


// var findRepeatedDnaSequences = function(s) {
//     return rabinKarp(s)
// };





function* rollingHash(str, size) {
    for (let i = 0; i <= str.length - size; i++) {
        yield str.slice(i, i+size)
    }

    return true
}

function rabinKarp(text) {
    const set = new Set()
    const res = new Set()

    const rh = rollingHash(text, 10)
    let i = 0;

    for (let val of rh) {  
        if(set.has(val)) {
            res.add(val)
        } else {
            set.add(val)
        }
    }

    const result = []
    
    for (let s of res.values()) {
        result.push(s)
    }

    return result;
}


var findRepeatedDnaSequences = function(s) {
    return rabinKarp(s)
};