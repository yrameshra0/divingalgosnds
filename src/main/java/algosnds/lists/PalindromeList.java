package algosnds.lists;

import java.util.Stack;

public class PalindromeList<T> {

    private boolean compareLists(LinkedList<T> originalList, LinkedList<T> reversedList) {
        Node<T> original = originalList.root;
        Node<T> reversed = reversedList.root;

        while (original != null) {
            if (!original.data.equals(reversed.data))
                return false;

            original = original.next;
            reversed = reversed.next;
        }

        return true;
    }

    private LinkedList<T> reverse(LinkedList<T> original) {
        Node<T> temp = original.root;
        LinkedList<T> reversed = new LinkedList<>();

        while (temp != null) {
            reversed.addToHead(temp.data);
            temp = temp.next;
        }

        return reversed;
    }

    public boolean verifyByReverse(LinkedList<T> original) {
        return compareLists(original, reverse(original));
    }

    public boolean verifyByRunner(LinkedList<T> original) {
        Stack<T> stack = new Stack<>();
        Node<T> fast = original.root;
        Node<T> slow = original.root;

        while (fast != null && fast.next != null) {
            stack.push(slow.data);

            slow = slow.next;
            fast = fast.next.next;
        }

        // Moving one more step for odd list
        if (fast != null)
            slow = slow.next;

        while (!stack.isEmpty()) {
            T firstHalfData = stack.pop();
            T secondHalfData = slow.data;

            if (!firstHalfData.equals(secondHalfData))
                return false;

            slow = slow.next;
        }

        return true;
    }

    public boolean verifyByRecursion(LinkedList<T> list) {
        return isPalindromeRecursive(list.root, list.length()).result;
    }

    private Outcome isPalindromeRecursive(Node<T> link, int length) {
        if (length == 0)
            return new Outcome(link);
        if (length == 1)
            return new Outcome(link.next);

        Outcome outcome = isPalindromeRecursive(link.next, length - 2);

        if (!outcome.result || outcome.node == null)
            return outcome;

        outcome.result = link.data.equals(outcome.node.data);
        outcome.node = outcome.node.next;

        return outcome;
    }

    class Outcome {
        private Node<T> node;
        private boolean result;

        Outcome(Node<T> node) {
            this.node = node;
            this.result = true;
        }
    }
}