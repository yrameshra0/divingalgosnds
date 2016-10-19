package algosnds.queues;

import java.util.NoSuchElementException;

public class Queue<T> {
    private QueueNode<T> first, last;

    public void add(T data) {
        QueueNode<T> temp = new QueueNode<>(data);

        if (last != null)
            temp.next = last;

        last = temp;

        if (first == null)
            first = last;
    }

    public T remove() {
        if (first == null) throw new NoSuchElementException();

        T data = first.data;
        first = first.next;

        if (first == null)
            last = null;

        return data;
    }

    public T peek() {
        if (first == null) throw new NoSuchElementException();

        return first.data;
    }

    public boolean isEmpty() {
        return first == null;
    }

    private class QueueNode<T> {
        private final T data;
        private QueueNode next;

        QueueNode(T data) {
            this.data = data;
        }
    }
}