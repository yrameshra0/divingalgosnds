package algosnds.general;

public class BinaryTreeToDoublyLinkedList {

    public ListNode convertTree(TreeNode root) {
        ListNode listNode = constructLinkedList(root);

        listNode = moveToHead(listNode);

        return listNode;
    }

    private ListNode constructLinkedList(TreeNode node) {
        if (node.left == null && node.right == null)
            return new ListNode(node.data);

        ListNode currentListNode = new ListNode(node.data);

        if (node.left != null) {
            ListNode leftListNode = constructLinkedList(node.left);

            // Find inorder predecessor. After this loop, left will point to the inorder predecessor
            leftListNode = moveToTail(leftListNode);

            leftListNode.next = currentListNode;
            currentListNode.previous = leftListNode;
        }

        if (node.right != null) {
            ListNode rightListNode = constructLinkedList(node.right);

            // Find inorder successor. After this loop, right will point to the inorder successor
            rightListNode = moveToHead(rightListNode);

            rightListNode.previous = currentListNode;
            currentListNode.next = rightListNode;
        }

        return currentListNode;
    }

    private ListNode moveToTail(ListNode listNode) {
        while (listNode.next != null)
            listNode = listNode.next;

        return listNode;
    }

    private ListNode moveToHead(ListNode listNode) {
        while (listNode.previous != null)
            listNode = listNode.previous;

        return listNode;
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
