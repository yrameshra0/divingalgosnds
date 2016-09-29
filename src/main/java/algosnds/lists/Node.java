package algosnds.lists;

public class Node<T> {
    public final T data;
    public Node<T> next;

    private Node(T data) {
        this.data = data;
    }

    public static <T> Node<T> newNode(T data) {
        return new Node<>(data);
    }
}