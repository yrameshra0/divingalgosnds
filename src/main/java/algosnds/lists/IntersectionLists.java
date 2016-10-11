package algosnds.lists;

public class IntersectionLists {
    public <T> Node<T> findIntersection(LinkedList<T> firstList, LinkedList<T> secondList) {
        int firstListLength = firstList.length();
        int secondListLength = secondList.length();
        Node<T> firstListTail = fetchTail(firstList.root);
        Node<T> secondListTail = fetchTail(secondList.root);

        if (!firstListTail.equals(secondListTail))
            return null; // No Intersection present

        Node<T> shorter, longer;
        if (firstListLength < secondListLength) {
            shorter = firstList.root;
            longer = secondList.root;
        } else {
            shorter = secondList.root;
            longer = firstList.root;
        }

        longer = getKthNode(longer, Math.abs(firstListLength - secondListLength));

        while (!longer.equals(shorter)) {
            shorter = shorter.next;
            longer = longer.next;
        }

        return longer;
    }

    private <T> Node<T> getKthNode(Node<T> root, int difference) {
        Node<T> temp = root;
        while (difference > 0) {
            temp = temp.next;
            difference -= 1;
        }

        return temp;
    }

    private <T> Node<T> fetchTail(Node<T> root) {
        Node<T> temp = root;

        while (temp.next != null)
            temp = temp.next;

        return temp;
    }

}