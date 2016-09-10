import { assert } from 'chai';
import * as postFixBST from '../../main/js/post-fix-bst-serialize-deserialize';

describe('Verify post-fix BST data de serialization', () => {
    let finalTree = {
        data: 5,
        left: {
            data: 2,
            left: {
                data: 1,
                left: undefined,
                right: undefined
            },
            right: {
                data: 3,
                left: undefined,
                right: {
                    data: 4,
                    left: undefined,
                    right: undefined
                }
            }
        },
        right: {
            data: 6,
            left: undefined,
            right: {
                data: 8,
                left: {
                    data: 7,
                    left: undefined,
                    right: undefined
                },
                right: undefined
            }
        }
    };

    it('Gives post-fix tree', () => {
        assert.deepEqual(postFixBST.deSerializeToTree([5, 2, 1, 3, 4, 6, 8, 7]), finalTree);
    });

    it('Gives post-fix array', () => {
        assert.deepEqual(postFixBST.serializeToArray(finalTree), [5, 2, 1, 3, 4, 6, 8, 7]);
    });
});