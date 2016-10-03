package algosnds.lists;

import java.util.Objects;

import static algosnds.lists.Node.newNode;

public class LinkedList<T> {
    public Node<T> root;

    public void addToTail(T data) {
        if (root == null)
            root = newNode(data);
        else {
            Node<T> temp = root;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode(data);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LinkedList<?> that = (LinkedList<?>) o;
        return Objects.equals(root, that.root);
    }

    @Override
    public int hashCode() {
        return Objects.hash(root);
    }

    @Override
    public String toString() {
        Node<T> temp = root;
        StringBuilder builder = new StringBuilder("LinkedList : ");

        while (temp != null) {
            builder.append(temp.data);
            if (temp.next != null)
                builder.append("->");
            temp = temp.next;
        }

        return builder.toString();
    }
}