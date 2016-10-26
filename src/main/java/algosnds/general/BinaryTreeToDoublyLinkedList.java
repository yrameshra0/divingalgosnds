package algosnds.general;

public class BinaryTreeToDoublyLinkedList {

    public ListNode convertTree(TreeNode root) {
        ListNode node = recursive(root);

        while (node.next != null)
            node = node.next;

        return node;
    }

    private ListNode recursive(TreeNode node) {
        if (node.left == null && node.right == null)
            return new ListNode(node.data);

        ListNode currenListtNode = new ListNode(node.data);

        if (node.left != null) {
            ListNode leftListNode = recursive(node.left);

            // Find inorder predecessor. After this loop, left
            // will point to the inorder predecessor
            for (; leftListNode.next != null; leftListNode = leftListNode.next) ;

            leftListNode.next = currenListtNode;
            currenListtNode.previous = leftListNode;
        }

        if (node.right != null) {
            ListNode rightListNode = recursive(node.right);

            // Find inorder successor. After this loop, right
            // will point to the inorder successor
            for (; rightListNode.previous != null; rightListNode = rightListNode.previous) ;

            rightListNode.previous = currenListtNode;
            currenListtNode.next = rightListNode;
        }

        return currenListtNode;
    }

    public static class TreeNode {
        final int data;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int data) {
            this.data = data;
        }
    }

    public static class ListNode {
        final int data;
        public ListNode previous;
        public ListNode next;

        public ListNode(int data) {
            this.data = data;
        }
    }
}
