/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const results = [[1], [1,1]];

    if(numRows===1) {
        results.pop()
        return results;
    } else if (numRows===2) {
        return results;
    }

    for(let i=2; i<=numRows-1; i++) {
        results[i]=[1]
        for(let j=1; j<=i-1; j++) {
            results[i].push(results[i-1][j-1]+results[i-1][j])
        }
        results[i].push(1)
    }


    return results;
};