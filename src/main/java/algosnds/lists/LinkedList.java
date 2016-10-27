package algosnds.lists;

import static algosnds.lists.Node.newNode;

public class LinkedList<T> {
    public Node<T> root;
    private int length = 0;

    public void addToHead(T data) {
        Node<T> newNode = newNode(data);
        newNode.next = root;
        root = newNode;

        length++;
    }

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

        length++;
    }

    public int length() {
        return length;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Node<T> current = this.root;
        Node<?> that = ((LinkedList<?>) o).root;

        boolean equals = true;
        while (current != null) {
            if (!current.data.equals(that.data)) {
                equals = false;
                break;
            }
            current = current.next;
            that = that.next;
        }

        return equals;
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