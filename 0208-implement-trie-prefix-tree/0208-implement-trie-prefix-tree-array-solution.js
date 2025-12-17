
var Trie = function() {
    this.root = new Node()
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root
    for(let i=0; i<word.length; i++) {
        if(currentNode.nextCharPointers[word.charCodeAt(i)-97]===null) {
            currentNode.nextCharPointers[word.charCodeAt(i)-97]=new Node()
        }

        currentNode = currentNode.nextCharPointers[word.charCodeAt(i)-97]


        if(i===word.length-1) {
            currentNode.end++;
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root
    for(let i=0; i<word.length; i++) {
        if(currentNode.nextCharPointers[word.charCodeAt(i)-97]==null) {
            return false;
        }
        
        currentNode = currentNode.nextCharPointers[word.charCodeAt(i)-97]

        if(i===word.length-1 && currentNode.end>0) {
            return true
        }
    }

    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root
    for(let i=0; i<prefix.length; i++) {
        if(currentNode.nextCharPointers[prefix.charCodeAt(i)-97]===null) {
            return false;
        }
        
        currentNode = currentNode.nextCharPointers[prefix.charCodeAt(i)-97]

        if(i===prefix.length-1) {
            return true
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
    this.end=0
 }