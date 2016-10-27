package algosnds.general;

import algosnds.lists.LinkedList;

public class SerializeDeserializeBinaryTree {

    public LinkedList<Integer> serialize(Node root) {
        LinkedList<Integer> accumulator = new LinkedList<>();
        return recursiveSerialize(root, accumulator);
    }

    private LinkedList<Integer> recursiveSerialize(Node node, LinkedList<Integer> accumulator) {
        if (node == null) {
            accumulator.addToTail(-1);
            return accumulator;
        }

        accumulator.addToTail(node.data);
        recursiveSerialize(node.left, accumulator);
        recursiveSerialize(node.right, accumulator);

        return accumulator;
    }

    public static class Node {
        public final int data;
        public Node left;
        public Node right;

        private Node(int data) {
            this.data = data;
        }

        public static Node newNode(int data) {
            return new Node(data);
        }
    }
}
