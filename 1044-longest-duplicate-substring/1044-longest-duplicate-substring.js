/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const [sortedSuffixList, sa] = suffixArray(s)
    const rankArray = createRankArray(sa)
    const lcp = createLcp(s, rankArray, sa)
    let dupLongestSubStr = ""

    for(let i=0; i<lcp.length; i++) {
        if(lcp[i]>dupLongestSubStr.length) {
            dupLongestSubStr = sortedSuffixList[i].slice(0, lcp[i])
        }        
    }

    return dupLongestSubStr;
};

function suffixArray(str) {
    let sortedSuffixList = []
    let temp = ""
    const len = str.length;

    for(let i=str.length-1; i>=0; i--) {
        sortedSuffixList.push(str.slice(i, len))
    }

    sortedSuffixList = sortedSuffixList.sort()
    const suffixArray = sortedSuffixList.map(el=>len-el.length)

    return [sortedSuffixList, suffixArray]
}

function createRankArray(suffixArray) {
    const rankArray = new Array(suffixArray.length).fill(0)

    for(let i=0; i<suffixArray.length; i++) {
        rankArray[suffixArray[i]] = i
    }

    return rankArray;
}

function createLcp(str, rankArray, suffixArray) {
    const lcp = new Array(rankArray.length).fill(0)
    let k = 0;
    const n = rankArray.length

    for(let i=0; i<rankArray.length; i++) {
        
        let r = rankArray[i]
        if(r===0) {
            k=0;
            continue;
        }
        let j = suffixArray[r-1]

        while(j+k<n && i+k<n && str[j+k] === str[i+k]){
            k++
        }

        lcp[r]=k
        if(k>0) {
            k--;
        }
    }

    return lcp;
}