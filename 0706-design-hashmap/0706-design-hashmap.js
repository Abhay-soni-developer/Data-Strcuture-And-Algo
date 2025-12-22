function Node(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
}

var MyHashMap = function () {
    this.thresholdLoadFactor = 0.75;
    this.elementCount = 0;
    this.array = new Array(MyHashMap.sizes[2]).fill(null)
};

MyHashMap.sizes = [
    1009,
    2003,
    5003,
    10007,
    20011,
    50021,
    100003,
]

MyHashMap.prototype.put = function (key, value) {
    if (this.elementCount / this.array.length > this.thresholdLoadFactor) {
        this.resize()
    }

    const index = key % this.array.length
    const newNode = new Node(key, value)

    if (!this.array[index]) {
        this.array[index] = newNode;
    } else {
        let bucketChain = this.array[index];
        
        if (bucketChain.key === key) {
            bucketChain.value=value
            return;
        }
        
        while (bucketChain && bucketChain.next) {
            if (bucketChain.next.key === key) {
                bucketChain.next.value=value
                return;
            }
            bucketChain = bucketChain.next
        }

        bucketChain.next = newNode;
    }

    this.elementCount++;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const index = key % this.array.length
    let node = this.array[index]

    if (node && node.key === key) {
        this.array[index] = node.next || null;
        this.elementCount--;
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

};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashMap.prototype.get = function (key) {
    const index = key % this.array.length

    let node = this.array[index];
    while (node) {
        if (node.key === key) {
            return node.value
        } else {
            node = node.next
        }
    }

    return -1;
};


MyHashMap.prototype.resize = function (key) {
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
                this.add(currentNode.key, currentNode.value);
            }
        }
    }

    return this.array;
};
