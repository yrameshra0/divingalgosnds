import { assert } from 'chai';
import lowestCommonAncestor from '../../../../main/javascript/algosnds/trees/lowest-common-ancestor-b-tree';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Lowest common ancestor between two nodes in Binary Tree', () => {
    let tree = createTreeNode(1);
    tree.left = createTreeNode(2);
    tree.left.left = createTreeNode(4);
    tree.left.right = createTreeNode(5);
    tree.left.right.left = createTreeNode(7);
    tree.left.right.right = createTreeNode(8);
    tree.right = createTreeNode(3);

    let node4 = tree.left.left,
        node8 = tree.left.right.right,
        node2 = tree.left,
        randomNode = createTreeNode(100);

    it('Gives lowest common ancestor using no parent traversal', () => {
        assert.deepEqual(lowestCommonAncestor(tree, node4, node8), node2);
        assert.isUndefined(lowestCommonAncestor(tree, node4, randomNode));
    });
});