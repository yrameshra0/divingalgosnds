
import { assert } from 'chai';
import convertToTree from '../../../../main/javascript/algosnds/trees/minimal-tree';
import createTreeNode from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Convert increasing order array to binary tree', () => {

    it('In-order array to Binary Tree', () => {
        let expectedTree = createTreeNode(4);
        expectedTree.left = createTreeNode(2);
        expectedTree.left.left = createTreeNode(1);
        expectedTree.left.right = createTreeNode(3);
        expectedTree.right = createTreeNode(6);
        expectedTree.right.left = createTreeNode(5);

        assert.deepEqual(convertToTree([1, 2, 3, 4, 5, 6]), expectedTree);
    });

});