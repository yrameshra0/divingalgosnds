import { assert } from 'chai';
import pathsSum from '../../../../main/javascript/algosnds/trees/paths-with-sum';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Calculate total paths in binary tree leading to given sum', () => {
    const calculateSum = pathsSum();

    const tree = createTreeNode(10);
    tree.left = createTreeNode(5);
    tree.right = createTreeNode(-3);

    tree.left.left = createTreeNode(3);
    tree.left.right = createTreeNode(2);
    tree.right.right = createTreeNode(11);

    tree.left.left.left = createTreeNode(3);
    tree.left.left.right = createTreeNode(-2);
    tree.left.right.right = createTreeNode(1);

    it('Total paths doing repeating work', () => {
        assert.equal(calculateSum.countTotalPathsNotOptimized(tree, 8), 3);
    });
    it('Smart total paths calculator avoiding repeating work', () => {
        assert.equal(calculateSum.countTotalPathsOptimized(tree, 8), 3);
    });
});