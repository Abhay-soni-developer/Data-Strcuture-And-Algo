
var WordDictionary = function () {
    this.trie = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.trie.add(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.trie.search(word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

function Node() {
    this.next = new Array(26).fill(null)
    this.we = 0
}

function Trie() {
    this.root = new Node()
}

Trie.prototype.add = function (word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
        if (!currentNode.next[getCode(word, i)]) {
            currentNode.next[getCode(word, i)] = new Node()
        }

        currentNode = currentNode.next[getCode(word, i)]

        if (i === word.length - 1) {
            currentNode.we++
        }
    }

    return this.currentNode
}

Trie.prototype.search = function (searchTerm, i = 0, node = null) {
    let currentNode = node || this.root;

    if (i === searchTerm.length - 1) {
        if (searchTerm[i] === ".") {
            for (let i = 0; i < 26; i++) {
                const child = currentNode.next[i];
                if (child && child.we > 0) return true
            }
            return false
        } else {
            const child = currentNode.next[getCode(searchTerm, i)]
            if (child && child.we > 0) return true;
            return false;
        }
    } else {
        if (searchTerm[i] === ".") {
            for (let j = 0; j < 26; j++) {
                if (currentNode.next[j]) {
                    if (this.search(searchTerm, i + 1, currentNode.next[j])) {
                        return true;
                    }
                }
            }
            return false;
        } else {
            let child = currentNode.next[getCode(searchTerm, i)]
            if (!child) return false;
            return this.search(searchTerm, i + 1, child)
        }
    }
}

function getCode(word, i) {
    return word.charCodeAt(i) - 97
}