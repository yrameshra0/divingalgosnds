import { assert } from 'chai';
import lowestCommonAncestor from '../../../../main/javascript/algosnds/trees/lowest-common-ancestor-b-tree';
import createTreeNode from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Lowest common ancestor in Binary Tree', () => {
    it('Gives lowest common ancestor between 2 nodes of tree', () => {
        let tree = createTreeNode(1);
        tree.left = createTreeNode(2);
        tree.left.left = createTreeNode(4);
        tree.left.right = createTreeNode(5);
        tree.left.right.left = createTreeNode(7);
        tree.left.right.right = createTreeNode(8);
        tree.right = createTreeNode(3);

        let lowestCommonAncestorNode = lowestCommonAncestor(tree, 4, 8)
        assert.equal(lowestCommonAncestorNode.data, 2);
    });
});