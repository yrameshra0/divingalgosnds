import { assert } from 'chai';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';
import allSequences from '../../../../main/javascript/algosnds/trees/bst-sequences';

describe('Array sequences that could lead to creation of binary search tree', () => {

    const bst = createTreeNode(2);
    bst.left = createTreeNode(1);
    bst.right = createTreeNode(3);

    it('Generate possible array sequences from give BST', () => {
        assert.deepEqual(allSequences(bst), [[2, 1, 3], [2, 3, 1]]);
    });
});