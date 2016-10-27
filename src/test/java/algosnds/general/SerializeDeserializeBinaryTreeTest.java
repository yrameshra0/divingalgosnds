package algosnds.general;

import algosnds.general.SerializeDeserializeBinaryTree.Node;
import algosnds.lists.LinkedList;
import org.junit.Test;

import java.util.stream.Stream;

import static algosnds.general.SerializeDeserializeBinaryTree.Node.newNode;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class SerializeDeserializeBinaryTreeTest {
    private SerializeDeserializeBinaryTree serializeDeserializeBinaryTree = new SerializeDeserializeBinaryTree();

    private LinkedList<Integer> createList(Integer... elements) {
        LinkedList<Integer> list = new LinkedList<>();

        Stream.of(elements).sequential().forEach(list::addToTail);

        return list;
    }

    @Test
    public void serialized_tree() throws Exception {
        Node root = newNode(20);
        root.left = newNode(8);
        root.right = newNode(22);
        root.left.left = newNode(4);
        root.left.right = newNode(12);
        root.left.right.left = newNode(10);
        root.left.right.right = newNode(14);

        LinkedList<Integer> serializedList = serializeDeserializeBinaryTree.serialize(root);
        LinkedList<Integer> expectedList = createList(20, 8, 4, -1, -1, 12, 10, -1, -1, 14, -1, -1, 22, -1, -1);

        assertThat(serializedList, is(expectedList));
    }

    @Test
    public void deserialize_tree() throws Exception {
        LinkedList<Integer> serializedInput = createList(20, 8, 4, -1, -1, 12, 10, -1, -1, 14, -1, -1, 22, -1, -1);
        Node root = serializeDeserializeBinaryTree.deserialize(serializedInput);

        LinkedList<Integer> inorderList = serializeDeserializeBinaryTree.inorder(root);
        LinkedList<Integer> expectedInorderList = createList(4, 8, 10, 12, 14, 20, 22);

        assertThat(inorderList, is(expectedInorderList));
    }
}
