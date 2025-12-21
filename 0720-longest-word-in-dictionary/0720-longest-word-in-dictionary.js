/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let trie = new Trie()

    for (let word of words) {
        trie.insert(word)
    }

    const arr = [""]

    return trie.searchLongestBuildableWorld("", trie.root, arr)[0]
};

function Node() {
    this.next = new Array(26).fill(null)
    this.end = 0
}

const Trie = function () {
    this.root = new Node()
    return this;
};

Trie.prototype.insert = function (word) {
    let currentNode = this.root
    for (let i = 0; i < word.length; i++) {
        if (currentNode.next[word.charCodeAt(i) - 97] === null) {
            currentNode.next[word.charCodeAt(i) - 97] = new Node()
        }

        currentNode = currentNode.next[word.charCodeAt(i) - 97]


        if (i === word.length - 1) {
            currentNode.end++;
        }
    }
};


Trie.prototype.searchLongestBuildableWorld = function (word, node, res) {

    if (node.end === 0 && node!==this.root) {
        return res
    }

    if (node.end > 0 && word.length > res[0].length) {
        res[0] = word
    }

    for (let i = 0; i < node.next.length; i++) {
        if (node.next[i]) {
            this.searchLongestBuildableWorld(
                word + String.fromCharCode(i + 97),
                node.next[i],
                res
            )
        }
    }

    return res;
};