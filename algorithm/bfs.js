var bfs = function(root) {
    const bfs = [];
    const stack = [root];

    while(stack.length>0) {
        const node = stack.shift()
        if(node===null) continue;
        const val = node.val
        bfs.push(val)
        stack.push(node.left)
        stack.push(node.right)
    }

    return bfs
};

