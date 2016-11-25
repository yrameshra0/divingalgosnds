import { assert } from 'chai';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';
import * as converter from '../../../../main/javascript/algosnds/trees/list-of-nodes-at-same-level';

describe('Convert tree to list', () => {
    // ----------------------------
    //            1      Level 0
    //          /   \
    //         2    3    Level 1
    //        / \  / \
    //       4  5 10 11  Level 2
    //      / \
    //     7  8          Level 3      
    // ----------------------------
    let tree = createTreeNode(1);
    tree.left = createTreeNode(2);
    tree.left.left = createTreeNode(4);
    tree.left.right = createTreeNode(5);
    tree.left.right.left = createTreeNode(7);
    tree.left.right.right = createTreeNode(8);
    tree.right = createTreeNode(3);
    tree.right.left = createTreeNode(10);
    tree.right.right = createTreeNode(11);


    let expectedLevelOrderList = [[1], [2, 3], [4, 5, 10, 11], [7, 8]];

    it('Generate level order node list in recursive fashion', () => {
        assert.deepEqual(expectedLevelOrderList, converter.recursiveLevelOrderList(tree));
    });


    it('Generate level order node list in breadth first fashion', () => {
        assert.deepEqual(expectedLevelOrderList, converter.bfsLevelOrderList(tree));
    });

});