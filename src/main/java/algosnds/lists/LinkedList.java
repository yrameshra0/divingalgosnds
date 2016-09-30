package algosnds.lists;

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
            Node<T> newNode = newNode(data);
            temp.next = newNode;
        }
    }
}