package algosnds.lists;

import java.util.Objects;

public class Node<T> {
    public final T data;
    public Node<T> next;

    private Node(T data) {
        this.data = data;
    }

    public static <T> Node<T> newNode(T data) {
        return new Node<>(data);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Node<?> node = (Node<?>) o;
        return Objects.equals(data, node.data) &&
                Objects.equals(next, node.next);
    }

    @Override
    public int hashCode() {
        return Objects.hash(data, next);
    }
}