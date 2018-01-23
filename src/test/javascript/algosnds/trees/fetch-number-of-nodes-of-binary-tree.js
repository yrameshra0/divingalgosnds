import {assert} from 'chai';
import {describe, it} from 'mocha';
import {fetchNumberOfNodesOfBinaryTree} from '../../../../main/javascript/algosnds/trees/number-of-nodes-of-binary-tree';
import {createTreeNode} from "../../../../main/javascript/algosnds/trees/tree-node";

describe('Computes recursively number of nodes of binary tree', () => {
    it('fetches number of nodes in binary tree', () => {
        let inputTree = createTreeNode(1);
        inputTree.left = createTreeNode(2);
        inputTree.right = createTreeNode(3);
        inputTree.left.left = createTreeNode(4);
        inputTree.left.right = createTreeNode(5);
        inputTree.right.left = createTreeNode(6);
        inputTree.right.left.right = createTreeNode(8);
        inputTree.right.left.left = createTreeNode(7);
        inputTree.right.left.left.left = createTreeNode(9);

        const numberOfNodes = fetchNumberOfNodesOfBinaryTree(inputTree);

        assert.equal(numberOfNodes, 9);
    });
});