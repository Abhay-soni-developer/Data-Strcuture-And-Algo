/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length != rowsCount * colsCount) {
        return [];

    }
    
    const result = Array.from({ length: rowsCount }, () => []);
    let start = 0;

    for (let i = 0; i < colsCount; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < rowsCount; j++) {
                result[j].push(this[start]);
                start++;
            }
        } else {
            for (let j = rowsCount - 1; j >= 0; j--) {
                result[j].push(this[start]);
                start++;
            }
        }



    }
    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */