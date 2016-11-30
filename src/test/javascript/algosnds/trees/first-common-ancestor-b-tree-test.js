import { assert } from 'chai';
import * as firstCommonAncestor from '../../../../main/javascript/algosnds/trees/first-common-ancestor-b-tree';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('First common ancestor between two nodes in Binary Tree', () => {
    let tree = createTreeNode(1);

    tree.left = createTreeNode(2);
    tree.right = createTreeNode(3);
    tree.left.parent = tree;
    tree.right.parent = tree;

    tree.left.left = createTreeNode(4);
    tree.left.right = createTreeNode(5);
    tree.left.left.parent = tree.left;
    tree.left.right.parent = tree.left;

    tree.left.right.left = createTreeNode(7);
    tree.left.right.right = createTreeNode(8);
    tree.left.right.left.parent = tree.left.right;
    tree.left.right.right.parent = tree.left.right;

    let node4 = tree.left.left,
        node8 = tree.left.right.right,
        node2 = tree.left,
        node1 = tree,
        randomNode = createTreeNode(100);

    it('Common ancestor using no parent traversal', () => {
        assert.deepEqual(firstCommonAncestor.usingNonParentTraversal(tree, node4, node8), node2);
        assert.isUndefined(firstCommonAncestor.usingNonParentTraversal(tree, node4, randomNode));
    });

    it('Common ancestor using optimized parent traversal', () => {
        assert.deepEqual(firstCommonAncestor.usingOptimizedParentTraversal(tree, node2, node8), node2);
        assert.deepEqual(firstCommonAncestor.usingOptimizedParentTraversal(tree, node2, node1), node1);
        assert.deepEqual(firstCommonAncestor.usingOptimizedParentTraversal(tree, node4, node8), node2);
        assert.isUndefined(firstCommonAncestor.usingNonParentTraversal(tree, node4, randomNode));
    });
});