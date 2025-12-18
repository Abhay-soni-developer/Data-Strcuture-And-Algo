/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()
    const result = []
    let prefix = ""

    for(let i=0; i<searchWord.length; i++) {
        prefix=prefix+searchWord[i]
        const arr = search(products, prefix)
        result.push(arr)
    }

    return result;
};


function search (products, prefix) {
    const res = []
    let lo=0, hi=products.length

    while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (products[mid] < prefix) lo = mid + 1;
    else hi = mid;
    }
    
    const lowerbound = lo;

    for(let i=0; i<3 && lowerbound+i<products.length; i++) {
        if(products[lowerbound+i].startsWith(prefix)) {
            res.push(products[lowerbound+i])
        }
    }



    return res
}