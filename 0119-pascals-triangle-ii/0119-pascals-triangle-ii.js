/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    return generate(rowIndex+1)[rowIndex]
};


var generate = function(numRows) {
    const results = [];

    for(let i=0; i<=numRows-1; i++) {
        results[i]=[]
        for(let j=0; j<=i; j++) {
            if(j===0 || j===i) {
                results[i].push(1)
                continue;
            }
            results[i].push(results[i-1][j-1]+results[i-1][j])
        }
    }


    return results;
};