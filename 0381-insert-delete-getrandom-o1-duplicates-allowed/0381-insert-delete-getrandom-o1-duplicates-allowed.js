
const RandomizedCollection = function () {
    this.map = new Map()
    this.array = new Array()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    const index = this.array.push(val)

    if (this.map.has(val)) {
        this.map.get(val).push(index-1)
        return false;
    } else {
        this.map.set(val, [index-1])
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (this.map.has(val)) {
        const arr = this.map.get(val)
        const index = arr.pop()
        
        if (arr.length === 0) {
            this.map.delete(val)
        }
        
        if(this.array.length===1 || index===this.array.length-1) {
            this.array.pop()
            return true
        }

        this.array[index]=this.array.pop()

        const lastKeyArr = this.map.get(this.array[index])

        const newArr = lastKeyArr.filter(el=>el!==this.array.length)
        newArr.push(index)
        this.map.set(this.array[index], newArr)
        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    return this.array[Math.floor(Math.random()*this.array.length)]
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */