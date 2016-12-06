import { assert } from 'chai';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';
import * as subTreeChecker from '../../../../main/javascript/algosnds/trees/check-subtree';

describe('Check subtree where T1 tree contians T2 tree completely', () => {

    let T1 = createTreeNode(1);
    T1.left = createTreeNode(2);
    T1.right = createTreeNode(3);
    T1.left.left = createTreeNode(4);
    T1.left.right = createTreeNode(5);
    T1.right.left = createTreeNode(6);
    T1.right.left.left = createTreeNode(7);
    T1.right.left.right = createTreeNode(8);

    let T2Success = createTreeNode(6);
    T2Success.left = createTreeNode(7);
    T2Success.right = createTreeNode(8);

    let T2Failure = createTreeNode(6);
    T2Failure.left = createTreeNode(8);
    T2Failure.right = createTreeNode(7);

    it('Check based on string approach (High on space complexity)', () => {
        assert.isTrue(subTreeChecker.stringBasedCheck(T1, T2Success));
        assert.isFalse(subTreeChecker.stringBasedCheck(T1, T2Failure));
    });

    it('Check based on iterative matching approach (No space complexity)', () => {
        assert.isTrue(subTreeChecker.treeContainsBasedCheck(T1, undefined));
        assert.isFalse(subTreeChecker.treeContainsBasedCheck(undefined, T2Success));
        assert.isTrue(subTreeChecker.treeContainsBasedCheck(T1, T2Success));
        assert.isFalse(subTreeChecker.treeContainsBasedCheck(T1, T2Failure));
    });
});