package algosnds.lists;

import java.util.Stack;

public class PalindromeList {

    private boolean compareLists(LinkedList<String> originalList, LinkedList<String> reversedList) {
        Node<String> original = originalList.root;
        Node<String> reversed = reversedList.root;

        while (original != null) {
            if (!original.data.equals(reversed.data))
                return false;

            original = original.next;
            reversed = reversed.next;
        }

        return true;
    }

    private LinkedList<String> reverse(LinkedList<String> original) {
        Node<String> temp = original.root;
        LinkedList<String> reversed = new LinkedList<>();

        while (temp != null) {
            reversed.addToHead(temp.data);
            temp = temp.next;
        }

        return reversed;
    }

    public boolean verifyByReverse(LinkedList<String> original) {
        return compareLists(original, reverse(original));
    }

    public boolean verifyByRunner(LinkedList<String> original) {
        Stack<String> stack = new Stack<>();
        Node<String> fast = original.root;
        Node<String> slow = original.root;

        while (fast != null && fast.next != null) {
            stack.push(slow.data);

            slow = slow.next;
            fast = fast.next.next;
        }

        // Moving one more step for odd list
        if (fast != null)
            slow = slow.next;

        while (!stack.isEmpty()) {
            String firstHalfData = stack.pop();
            String secondHalfData = slow.data;

            if (!firstHalfData.equals(secondHalfData))
                return false;

            slow = slow.next;
        }

        return true;
    }
}