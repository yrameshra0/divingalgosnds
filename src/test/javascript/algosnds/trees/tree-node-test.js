import { assert } from 'chai';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Generate tree', () => {
    it('Create tree node for formulating entire tree', () => {
        let tree = createTreeNode(5);
        tree.left = createTreeNode(1);
        tree.right = createTreeNode(10);

        let expectedTree = {
            data: 5,
            left: {
                data: 1,
                left: undefined,
                right: undefined,
                parent: undefined
            },
            right: {
                data: 10,
                left: undefined,
                right: undefined,
                parent: undefined
            },
            parent: undefined
        };

        assert.deepEqual(tree, expectedTree);
    });

    it('Create tree node with parent setting while formulating entire tree', () => {
        let tree = createTreeNode(5);

        tree.left = createTreeNode(1);
        tree.left.parent = tree;

        tree.right = createTreeNode(10);
        tree.right.parent = tree;

        let expectedTree = {
            data: 5,
            left: {
                data: 1,
                left: undefined,
                right: undefined,
                parent: undefined,
            },
            right: {
                data: 10,
                left: undefined,
                right: undefined,
                parent: undefined,
            },
            parent: undefined
        };

        expectedTree.left.parent = expectedTree;
        expectedTree.right.parent = expectedTree;

        assert.deepEqual(tree, expectedTree);
    });
})