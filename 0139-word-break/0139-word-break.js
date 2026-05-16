/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const trie = new Trie();
    const memo = new Map();

    for (let word of wordDict) {
        trie.insert(word);
    }

    return checkIfStringExist(s, trie, memo)

};


function checkIfStringExist(s, trie, memo) {
    if (s.length == 0) return true;
    if (memo.has(s)) return memo.get(s);

    let i = 0;
    while (i < s.length) {
        let current = trie.root;
        let start = i;

        while (
            i < s.length &&
            current.nextCharPointers[s.charCodeAt(i) - 97]
        ) {
            current = current.nextCharPointers[s.charCodeAt(i) - 97];
            i++;
            if (current.end > 0) {
                const flag = checkIfStringExist(s.slice(i), trie, memo)
                if (flag) {
                    memo.set(s, true);
                    return true
                }
            }
        }

        memo.set(s, false)
        return false;

    }

    if (i === s.length) {
        return true;
    }

    return false;

}



var Trie = function () {
    this.root = new Node()
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currentNode = this.root
    for (let i = 0; i < word.length; i++) {
        if (currentNode.nextCharPointers[word.charCodeAt(i) - 97] === null) {
            currentNode.nextCharPointers[word.charCodeAt(i) - 97] = new Node()
        }

        currentNode = currentNode.nextCharPointers[word.charCodeAt(i) - 97]


        if (i === word.length - 1) {
            currentNode.end++;
        }
    }
};


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

function Node() {
    this.nextCharPointers = new Array(26).fill(null)
    this.end = 0
}
