package algosnds.general;

import algosnds.general.BinaryTreeToDoublyLinkedList.ListNode;
import algosnds.general.BinaryTreeToDoublyLinkedList.TreeNode;
import org.junit.Test;

import java.util.Arrays;
import java.util.LinkedList;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class BinaryTreeToDoublyLinkedListTest {
    private BinaryTreeToDoublyLinkedList binaryTreeToDoublyLinkedList = new BinaryTreeToDoublyLinkedList();

    @Test
    public void converting_tree_to_doubly_linked_list() throws Exception {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(12);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(25);
        root.left.right = new TreeNode(30);
        root.right.left = new TreeNode(36);

        LinkedList<Integer> expectedList = new LinkedList<>(Arrays.asList(15, 36, 10, 30, 12, 25));

        ListNode actualList = binaryTreeToDoublyLinkedList.convertTree(root);

        while (!expectedList.isEmpty()) {
            assertThat(actualList.data, is(expectedList.removeFirst()));
            actualList = actualList.previous;
        }

        assertThat(expectedList.isEmpty(), is(true));
    }


}
