function suffixArrayFromStr(str = "") {
    let sortedSuffixArray = []
    let temp = ""

    for (let i = str.length - 1; i >= 0; i--) {
        temp = str[i] + temp
        sortedSuffixArray.push(temp)
    }


    sortedSuffixArray.sort()

    return sortedSuffixArray;
}


function createLcpArrayFromSuffixArray(suffixArray) {

    const lcp = new Array(suffixArray.length).fill(0)

    for (let i = 1; i < lcp.length; i++) {
        lcp[i] = findLcp(suffixArray[i - 1], suffixArray[i])
    }

    return lcp
}

function createRankArray(sa) {
    const rankArray = new Array(sa.length);
    sa.forEach((el, index)=>{
       rankArray[sa[index]]=index
    })

    return rankArray;
}


function findLcp(str1, str2) {
    let i = 0, upto = Math.min(str1.length, str2.length);

    while (i < upto && str1[i] === str2[i]) {
        i++
    }

    return i;
}



function kasai(str) {
    const sa = suffixArrayFromStr(str)
    console.log(sa)
    const suffixArray = sa.map(el=>sa.length-el.length)
    console.log(suffixArray)
    const rankArray = createRankArray(suffixArray)
    console.log(rankArray)
    let k = 0;
    const lcp = new Array(suffixArray.length).fill(0)

    for(let i=0; i<rankArray.length; i++) {
        r=rankArray[i]
        if(r===0) {
            k=0;
            continue;
        }

        let j = suffixArray[r-1];
        
        while(j+k<sa.length && i+k<sa.length && str[j+k]===str[i+k]) {
            k++;
        }

        lcp[r]=k

        if(k>0) {
            k--;
        }
    }

    return lcp;
}


console.log(kasai("banana"))