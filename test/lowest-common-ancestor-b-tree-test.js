import { assert } from 'chai';
import lowestCommonAncestor from '../src/lowest-common-ancestor-b-tree';

describe('Lowest common ancestor in Binary Tree', () => {
    it('Gives lowest common ancestor between 2 nodes of tree', () => {
        let tree = {
            data: 1,
            left: {
                data: 2,
                left: {
                    data: 4,
                    left: undefined,
                    right: undefined
                },
                right: {
                    data: 5,
                    left: {
                        data: 7,
                        left: undefined,
                        right: undefined
                    },
                    right: {
                        data: 8,
                        left: undefined,
                        right: undefined
                    }
                }
            },
            right: {
                data: 3,
                left: undefined,
                right: undefined
            }
        };

        let lowestCommonAncestorNode = lowestCommonAncestor(tree, 4, 8)
        assert.equal(lowestCommonAncestorNode.data, 2);
    });
});