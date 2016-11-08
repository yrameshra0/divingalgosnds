import { assert } from 'chai';
import convertToTree from '../../../main/js/trees/minimal-tree';

describe('Convert increasing order array to binary tree', () => {

    it('In-order array to Binary Tree', () => {
        let expectedTree = {
            root: 4,
            left: {
                root: 2,
                left: {
                    root: 1,
                    left: undefined,
                    right: undefined
                },
                right: {
                    root: 3,
                    left: undefined,
                    right: undefined
                }
            },
            right: {
                root: 6,
                left: {
                    root: 5,
                    left: undefined,
                    right: undefined
                },
                right: undefined
            }
        };
        assert.deepEqual(convertToTree([1, 2, 3, 4, 5, 6]), expectedTree);
    });

});