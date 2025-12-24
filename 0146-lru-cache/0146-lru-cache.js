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

        if (this.start === node) {
            //start Node
            return this.map.get(key).value

        } else if (node.prev && node.next) {
            // middle node
            node.prev.next = node.next
            node.next.prev = node.prev

            this.start.prev = node;
            node.next = this.start
            node.prev = null
        } else if (node.prev && node.next === null) {
            //end Node
            node.prev.next = null
            this.end = node.prev
            node.prev = null
            node.next = this.start
            this.start.prev = node
        }


        this.start = node;
        return this.map.get(key).value

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

        if (this.start === node) {
            //start Node
        } else if (node.prev && node.next) {
            //middle Node
            node.prev.next = node.next
            node.next.prev = node.prev

            this.start.prev = node;
            node.next = this.start
            node.prev = null
        } else if (node.prev && node.next === null) {
            //end Node
            node.prev.next = null
            this.end = node.prev
            node.prev = null
            node.next = this.start
            this.start.prev = node
        }

        this.start = node;
    } else {
        const newNode = new Node(key, value, null, this.start)

        if (this.start) {
            this.start.prev = newNode
        }
        // put new node at starting
        this.start = newNode;
        this.map.set(key, this.start)


        //if this is the first node, mark it as end too
        if (this.map.size === 1) {
            this.end = newNode;
        }


        // remove last node, if capacity exceeds
        if (this.map.size > this.capacity) {
            const removeNode = this.end
            this.map.delete(removeNode.key)

            this.end = removeNode.prev

            if (this.end) {
                this.end.next = null
            }

            removeNode.prev = null
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */