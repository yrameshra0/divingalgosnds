module.exports.fetchNumberOfNodesOfBinaryTree = function fetchNumberOfNodesOfBinaryTree(inputTree) {
    const nodeCount = function nodeCount(node) {
        if (node === undefined)
            return 0;
        
        if (node.left === undefined && node.right === undefined)
            return 1;

        return nodeCount(node.left) + nodeCount(node.right) + 1;
    };

    return nodeCount(inputTree);
};