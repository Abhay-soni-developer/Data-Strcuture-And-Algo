/**
 * @param {number} capacity
 */

function Node(key, value, prev, next) {
    this.next = next || null
    this.prev = prev || null;
    this.key = key
    this.value = value
}

const LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.end = null;
    this.start = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        this.removeNode(node)
        this.addNodeToStart(node)
        return node.value
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.value = value
        this.removeNode(node)
        this.addNodeToStart(node)
    } else {
        const newNode = new Node(key, value)
        this.map.set(key, newNode)
        this.addNodeToStart(newNode)

        //if this is the only node, mark it as end too
        if (this.map.size === 1) {
            this.end = newNode;
        }

        if (this.map.size > this.capacity) {
            this.map.delete(this.end.key)
            this.removeNode(this.end)
        }
    }
};

LRUCache.prototype.removeNode = function (node) {

    if (node.prev === null && node.next === null) {
        return node;
    } else if (node.prev === null && node.next) {
        node.next.prev = null;
        this.start = node.next;
        node.next = null;
    } else if (node.prev && node.next) {
        node.prev.next = node.next
        node.next.prev = node.prev

        node.next = null;
        node.prev = null;
    } else if (node.prev && node.next === null) {
        this.end = node.prev
        node.prev.next = null;
        node.prev = null
    }

    // return disconnected Node
    return node
}


LRUCache.prototype.addNodeToStart = function (node) {
    if (this.start === node ) {
        return node;
    } else if (this.start === null) {
        this.start = node;
        return node;
    }


    if (node.next !== null || node.prev !== null) {
        this.removeNode(node)
    }

    this.start.prev = node
    node.next = this.start;
    this.start = node;
    return node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */