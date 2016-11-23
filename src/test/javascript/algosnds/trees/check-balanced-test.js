import { assert } from 'chai';
import isBalanced from '../../../../main/javascript/algosnds/trees/check-balanced';
import createTreeNode from '../../../../main/javascript/algosnds/trees/tree-node';

describe('Check if binary tree is balanced or not', () => {
    /**
    	Balance tree is defined if the heights of the any two sub trees of a node 
    	never differ by more than one
    **/
    it('Signal true for balanced tree', () => {
        // ----------------------------
        //		  	  1      Level 0
        //    	 	/   \
        //         2    3 	 Level 1
        //        / \  	 \
        //       4  5 	 6	 Level 2
        //      / 
        //     7  		     Level 3      
        // ----------------------------
        let balancedTree = createTreeNode(1);
        balancedTree.left = createTreeNode(2);
        balancedTree.left.left = createTreeNode(4);
        balancedTree.left.right = createTreeNode(5);
        balancedTree.left.left.left = createTreeNode(7);

        balancedTree.right = createTreeNode(3);
        balancedTree.right.right = createTreeNode(6);

        assert.isTrue(isBalanced(balancedTree));

    });

    it('Signal false for non-balanced tree', () => {
        // ----------------------------
        //		  	  1      Level 0
        //    	 	/   \
        //         2    3 	 Level 1
        //        / \  	 \
        //       4  5 	 6	 Level 2
        //      / 		  \	
        //     7  		  8  Level 3      
        // ----------------------------
        let balancedTree = createTreeNode(1);
        balancedTree.left = createTreeNode(2);
        balancedTree.left.left = createTreeNode(4);
        balancedTree.left.right = createTreeNode(5);
        balancedTree.left.left.left = createTreeNode(7);

        balancedTree.right = createTreeNode(3);
        balancedTree.right.right = createTreeNode(6);
        balancedTree.right.right.right = createTreeNode(8);

        assert.isFalse(isBalanced(balancedTree));

    });
});