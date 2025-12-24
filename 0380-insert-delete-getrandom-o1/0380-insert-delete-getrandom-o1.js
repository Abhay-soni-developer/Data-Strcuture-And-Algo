
var RandomizedSet = function () {
    this.array = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    
    const index = this.array.push(val)
    this.map.set(val, index - 1)

    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        const index = this.map.get(val)
        const lastKey = this.array[this.array.length - 1]

        if (this.array[index] !== lastKey) {
            this.array[index] = lastKey
            this.map.set(lastKey, index)
        }

        this.array.pop()
        this.map.delete(val)


        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.array[Math.floor(Math.random() * this.array.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */