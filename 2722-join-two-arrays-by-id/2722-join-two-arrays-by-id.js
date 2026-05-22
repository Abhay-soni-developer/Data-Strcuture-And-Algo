/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let records = new Map();
    let merged = [...arr1, ...arr2];

    merged.forEach((item) => {
        if (records.has(item.id)) {
            records.get(item.id).push(item)
            return;
        }
        records.set(item.id, [item])
    })

    console.log(records)
    const sortedIds = Array.from(new Set(merged.map(item => item.id))).sort((a, b) => a - b);
    console.log(sortedIds)
    return sortedIds.map(id => {
        const record = records.get(id);
        return record.reduce((acc, item) => {
            Object.entries(item).forEach((entry) => {
                if (entry[0] === 'id') return acc;
                acc[entry[0]] = entry[1];
            })
            return acc;
        }, { id })
    })

};