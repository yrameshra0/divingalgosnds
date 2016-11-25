export function retrieveInOrderSuccessor(node) {
    if (node === undefined) return;

    if (node.right !== undefined) {
        return leftMostNode(node.right);
    } else {
        return traverseUpwardsInTree(node);
    }
}

function leftMostNode(node) {
    while (node.left !== undefined) {
        node = node.left;
    }

    return node;
}

function traverseUpwardsInTree(node) {
    let x = node.parent;

    while (x !== undefined && x.left !== node) {
        node = x;
        x = x.parent;
    }

    return x;
}