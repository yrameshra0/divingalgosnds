import { assert } from 'chai';
import { createTreeNode, createTreeNodeWithParent } from '../../../../main/javascript/algosnds/trees/tree-node';

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
                right: undefined
            },
            right: {
                data: 10,
                left: undefined,
                right: undefined
            }
        };

        assert.deepEqual(tree, expectedTree);
    });

    it('Create tree node with paren for formulating entire tree', () => {
        let parent = createTreeNodeWithParent(5, undefined),
            tree = Object.assign({}, parent);

        tree.left = createTreeNodeWithParent(1, parent);
        tree.right = createTreeNodeWithParent(10, parent);

        let expectedTree = {
            data: 5,
            left: {
                data: 1,
                left: undefined,
                right: undefined,
                parent: {
                    data: 5,
                    left: undefined,
                    right: undefined,
                    parent: undefined
                }
            },
            right: {
                data: 10,
                left: undefined,
                right: undefined,
                parent: {
                    data: 5,
                    left: undefined,
                    right: undefined,
                    parent: undefined
                }
            },
            parent: undefined
        };

        assert.deepEqual(tree, expectedTree);
    });
})