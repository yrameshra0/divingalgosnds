import { assert } from 'chai';
import { retrieveInOrderSuccessor } from '../../../../main/javascript/algosnds/trees/in-order-successor-of-bst';
import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Binary search tree inorder successor', () => {

    let bst = createTreeNode(5);

    bst.left = createTreeNode(2);
    bst.left.parent = bst;

    bst.left.left = createTreeNode(1);
    bst.left.left.parent = bst.left

    bst.left.right = createTreeNode(3);
    bst.left.right.parent = bst.left;

    bst.right = createTreeNode(7);
    bst.right.parent = bst;

    bst.right.left = createTreeNode(6);
    bst.right.left.parent = bst.right;

    bst.right.right = createTreeNode(8);
    bst.right.right.parent = bst.right;

    /**
	    When there is a right sub-tree the in-order successor finding is trivial 
	    which is the left most node of the right sub-tree
	    For Example :
	    				 5  <== Input
	    			  	/ \
	    			  	  7
	    			  	 /
	    			  	6 ==> Output
    **/
    it('Retrieve successor when there is right sub-tree', () => {
        assert.deepEqual(retrieveInOrderSuccessor(bst), bst.right.left);
        assert.deepEqual(retrieveInOrderSuccessor(bst.right.right.right), undefined);
    });

    /**
	    When there is no right sub-tree the in-order successor finding is challenging 
	    where we need to traverse towards the parent node and search the correct successor
	    For Example :
	    				 5  ==> Output
	    			  	/ \
	    			   2  
	    			  / \	
	    			 1	3 <== Input
    **/
    it('Retrieve successor when there is no right sub-tree', () => {
        assert.deepEqual(retrieveInOrderSuccessor(bst.left.right), bst);
    });

});