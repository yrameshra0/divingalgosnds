package algosnds.queues;

import algosnds.stacks.Stack;

public class QueueFromStack<T> {
    private final Stack<T> stackNewest, stackOldest;

    public QueueFromStack() {
        this.stackNewest = new Stack<>();
        this.stackOldest = new Stack<>();
    }

    public void add(T data) {
        stackNewest.push(data);
    }

    public T remove() {
        shiftStacks();
        return stackOldest.pop();
    }

    public T peek() {
        shiftStacks();
        return stackOldest.peek();
    }

    private void shiftStacks() {
        if (stackOldest.isEmpty())
            while (!stackNewest.isEmpty())
                stackOldest.push(stackNewest.pop());
    }
}