import { assert } from 'chai';
import firstCommonAncestor from '../../../../main/javascript/algosnds/trees/first-common-ancestor-b-tree';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('First common ancestor between two nodes in Binary Tree', () => {
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

    it('Common ancestor using no parent traversal', () => {
        assert.deepEqual(firstCommonAncestor(tree, node4, node8), node2);
        assert.isUndefined(firstCommonAncestor(tree, node4, randomNode));
    });
});