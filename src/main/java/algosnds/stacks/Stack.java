package algosnds.stacks;

import java.util.EmptyStackException;

public class Stack<T> {
    private StackNode<T> top;

    public void push(T element) {
        StackNode<T> newNode = new StackNode<>(element);
        newNode.next = top;
        top = newNode;
    }

    public T pop() {
        if (top == null) throw new EmptyStackException();

        T data = top.data;
        top = top.next;
        return data;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public T peek() {
        if (top == null) throw new EmptyStackException();

        return top.data;
    }

    private class StackNode<T> {
        private T data;
        private StackNode<T> next;

        StackNode(T data) {
            this.data = data;
        }
    }
}