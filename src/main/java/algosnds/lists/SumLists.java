package algosnds.lists;

public class SumLists {

    public LinkedList<Integer> addReverseList(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        Node<Integer> first = list1.root;
        Node<Integer> second = list2.root;

        LinkedList<Integer> sumList = new LinkedList<>();

        reverseRecursiveAdd(first, second, 0, sumList);
        return sumList;
    }

    private void reverseRecursiveAdd(Node<Integer> first, Node<Integer> second, Integer carry, LinkedList<Integer> accum) {
        if (first == null && second == null && carry == 0)
            return;

        int sum = carry;
        carry = 0;

        if (first != null) {
            sum += first.data;
            first = first.next;
        }

        if (second != null) {
            sum += second.data;
            second = second.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        accum.addToTail(sum);

        reverseRecursiveAdd(first, second, carry, accum);
    }

    public LinkedList<Integer> addForwardList(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        addPadToLists(list1, list2);

        Node<Integer> first = list1.root;
        Node<Integer> second = list2.root;

        CarryAndListHolder holder = reverseForwardAdd(first, second);
        
        // Pushing the carry  over the last element on the top of the list
        if (holder.carry > 0)
            holder.accum.addToHead(holder.carry);

        return holder.accum;
    }

    private void addPadToLists(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        int firstListLength = list1.length();
        int secondListLength = list2.length();

        if (firstListLength > secondListLength)
            pad(list2, (firstListLength - secondListLength));
        else if (secondListLength > firstListLength)
            pad(list1, (secondListLength - firstListLength));
    }

    private void pad(LinkedList<Integer> list, int length) {
        for (int i = 0; i < length; i++)
            list.addToHead(0);
    }

    private CarryAndListHolder reverseForwardAdd(Node<Integer> first, Node<Integer> second) {
        if (first == null && second == null)
            return new CarryAndListHolder();

        CarryAndListHolder holder = reverseForwardAdd(first.next, second.next);

        int sum = first.data + second.data + holder.carry;
        holder.carry = 0;

        if (sum >= 10) {
            holder.carry = 1;
            sum -= 10;
        }

        holder.accum.addToHead(sum);

        return holder;
    }

    private class CarryAndListHolder {
        private int carry;
        private LinkedList<Integer> accum;

        private CarryAndListHolder() {
            this.carry = 0;
            this.accum = new LinkedList<>();
        }
    }
}