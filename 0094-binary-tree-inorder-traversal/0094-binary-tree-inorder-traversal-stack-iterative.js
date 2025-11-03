/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const inorder = [];
    const stack = [root];
    const visited = new WeakSet()

    while(stack.length>0) {
        
        const node = stack[stack.length-1]
        if(node===null) {
            stack.pop()
            continue;
        }

        if(node.left && !visited.has(node.left)) {
            stack.push(node.left);
            visited.add(node.left)
            continue;
        } else {
            inorder.push(node.val)
            let currentNode = stack.pop()
            if(currentNode.right) {
                stack.push(currentNode.right)
            }
        }

    }

    return inorder
};