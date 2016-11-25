import { assert } from 'chai';
import * as bstValidator from '../../../../main/javascript/algosnds/trees/check-binary-tree-an-valid-bst';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Validate given Binary Tree if it is an Binary Search Tree', () => {
    /**
    	Binary Search Tree the criteira to full-fill is 
    		left.data < current.data < right.data

    	If the above mentioned condition meets for entire tree traversal then we 
    	can annoce that the tree is valida Binary Search Tree
    **/
    let bst = createTreeNode(5);
    bst.left = createTreeNode(2);
    bst.left.left = createTreeNode(1);
    bst.left.right = createTreeNode(3);
    bst.right = createTreeNode(7);
    bst.right.left = createTreeNode(6);
    bst.right.right = createTreeNode(8);

    let nonBst = createTreeNode(5);
    nonBst.left = createTreeNode(2);
    nonBst.left.left = createTreeNode(10);
    nonBst.left.right = createTreeNode(3);
    nonBst.right = createTreeNode(7);
    nonBst.right.left = createTreeNode(6);
    nonBst.right.right = createTreeNode(8);

    it('Validate using sorted array way', () => {
        /**
        	Binary search tree another interesting things that comes out is
        	if we have an in-order array of the nodes of binary search tree
        	the array comes out to be sorted.
        **/

        assert.isTrue(bstValidator.validateUsingInOrderArray(bst));
        assert.isFalse(bstValidator.validateUsingInOrderArray(nonBst));

    });

    it('Validate comparing only last element seen', () => {
        /**
        	Similar to in-order array but rather that using the entire space 
        	of an array we just keep track of the last element seen and make 
        	our decision based over that
        **/

        assert.isTrue(bstValidator.validateUsingLastSeen(bst));
        assert.isFalse(bstValidator.validateUsingLastSeen(nonBst));
    });

    it('Validate comparing against max and min seen so far', () => {
        /**
			Above methods of verification fail for certain invalid scenario like :
			(Valid combination) =>		20  (InValid combination) =>		20
										/									 \
				   					   20									 20

			To avoid the corner case and avoid the declaration of this above invalid 
			scenario we want to keep track of the min and max seen so far.
        **/

        assert.isTrue(bstValidator.validateUsingMinAndMax(bst));
        assert.isFalse(bstValidator.validateUsingMinAndMax(nonBst));
    });
})