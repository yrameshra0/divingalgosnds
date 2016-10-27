package algosnds.general;

import algosnds.lists.LinkedList;

import static algosnds.general.SerializeDeserializeBinaryTree.Node.newNode;

public class SerializeDeserializeBinaryTree {
    private static final int MARKER = -1;
    private algosnds.lists.Node<Integer> deserializerHelper;

    public LinkedList<Integer> serialize(Node root) {
        return recursiveSerialize(root, new LinkedList<>());
    }

    private LinkedList<Integer> recursiveSerialize(Node node, LinkedList<Integer> accumulator) {
        if (node == null) {
            accumulator.addToTail(MARKER);
            return accumulator;
        }

        accumulator.addToTail(node.data);
        recursiveSerialize(node.left, accumulator);
        recursiveSerialize(node.right, accumulator);

        return accumulator;
    }

    public Node deserialize(LinkedList<Integer> serializedInput) {
        deserializerHelper = serializedInput.root;
        return recursiveDeserialize();
    }

    private Node recursiveDeserialize() {
        if (deserializerHelper.data == MARKER) {
            deserializerHelper = deserializerHelper.next;
            return null;
        }

        Node node = newNode(deserializerHelper.data);
        deserializerHelper = deserializerHelper.next;

        if (deserializerHelper.next != null) {
            node.left = recursiveDeserialize();
            node.right = recursiveDeserialize();
        }

        return node;
    }

    public LinkedList<Integer> inorder(Node root) {
        return recursiveInorder(root, new LinkedList<>());
    }

    private LinkedList<Integer> recursiveInorder(Node node, LinkedList<Integer> accumulator) {
        if (node == null)
            return accumulator;

        recursiveInorder(node.left, accumulator);
        accumulator.addToTail(node.data);
        recursiveInorder(node.right, accumulator);

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
