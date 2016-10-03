package algosnds.lists;

public class SumLists {

    public LinkedList<Integer> add(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        Node<Integer> first = list1.root;
        Node<Integer> second = list2.root;

        LinkedList<Integer> sumList = new LinkedList<>();

        recursiveAdd(first, second, 0, sumList);
        return sumList;
    }

    private void recursiveAdd(Node<Integer> first, Node<Integer> second, Integer carry, LinkedList<Integer> accum) {
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

        recursiveAdd(first, second, carry, accum);
    }
}