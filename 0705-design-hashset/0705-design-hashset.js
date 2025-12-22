
function Node(key) {
    this.key = key;
    this.next = null;
}

var MyHashSet = function () {
    this.thresholdLoadfactor = 0.75;
    this.elementCount = 0;
    this.array = new Array(MyHashSet.sizes[2]).fill(null)
};

MyHashSet.sizes = [
    1009,
    2003,
    5003,
    10007,
    20011,
    50021,
    100003,
]

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.elementCount / this.array.length > 0.75) {
        this.resize()
    }

    const index = key % this.array.length
    const newNode = new Node(key)

    if (!this.array[index]) {
        this.array[index] = newNode;
    } else {
        let bucketChain = this.array[index];
        if (bucketChain.key === key) return this.array
        
        while (bucketChain && bucketChain.next) {
            if (bucketChain.next.key === key) return this.array
            bucketChain = bucketChain.next
        }

        bucketChain.next = newNode;
    }

    this.elementCount++;
    return this.array
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const index = key % this.array.length
    let node = this.array[index]

    if (node && node.key === key) {
        this.array[index] = node.next || null;
        this.elementCount--;
        return this.array
    }

    while (node && node.next && node.next.key !== key) {
        node = node.next
    }

    if (node && node.next && node.next.key === key) {
        let removeNode = node.next
        node.next = removeNode.next;
        removeNode.next = null;
        this.elementCount--;
    }

    return this.array;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const index = key % this.array.length

    let node = this.array[index];

    while (node) {
        if (node.key === key) {
            return true
        } else {
            node = node.next
        }
    }

    return false;
};


MyHashSet.prototype.resize = function (key) {
    const newSize = MyHashSet.sizes.find((size) => size > this.array.length)
    const oldArr = this.array
    const newArr = new Array(newSize).fill(null)
    this.array = newArr;

    // reset when you generate a new array
    this.elementCount = 0;
    for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i]) {
            let node = oldArr[i];
            while (node) {
                let currentNode = node;
                node = currentNode.next
                currentNode.next = null;
                this.add(currentNode.key);
            }
        }
    }

    return this.array;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */