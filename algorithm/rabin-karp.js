// introduction of prime number as base and modulous to reduce the 
// chances of hash collison will make this algorithm actually useful in real case scenerio

const B = 31
const M = 1_000_000_007

BPowers = [1]

function BPower(power) {

    if (BPowers[power]) {
        return BPowers[power]
    }

    let i = BPowers.length;

    while (i <= power) {
        BPowers[i] = (BPowers[i - 1] * B) % M
        i++;
    }

    return BPowers[power]
}




const toVal = (c = "") => c.charCodeAt(0) - 96

function* rollingHash(str, size) {
    let lastComputedHash = 0;
    BPower(size + 1)

    for (let i = 0; i <= str.length - size; i++) {
        if (i === 0) {
            lastComputedHash = str.slice(0, size).split('').reduce((a, c, index) => {
                return ((toVal(c) * BPower(size - (index + 1))) + a) % M
            }, 0)
        } else {
            let hash = lastComputedHash - (((toVal(str[i - 1]) * BPower(size - 1))) % M)
            hash = (hash + M) % M
            hash = (hash * B) % M
            hash = (hash + toVal(str[i + size - 1])) % M
            lastComputedHash = hash
        }

        yield lastComputedHash;
    }

    return true
}


function rabinKarp(text, pat) {
    const patHash = rollingHash(pat, pat.length).next().value
    const rh = rollingHash(text, pat.length)

    for (let hash of rh) {
        if (hash === patHash) {
            rh.return()
            return true
        }
    }

    return false;
}

