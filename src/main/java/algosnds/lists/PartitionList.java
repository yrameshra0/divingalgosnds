package algosnds.lists;

public class PartitionList {

    public Node<Integer> partition(Node<Integer> node, int pivot) {
        Node<Integer> frontStart = null;
        Node<Integer> frontEnd = null;

        Node<Integer> backStart = null;
        Node<Integer> backEnd = null;

        while (node != null) {
            Node<Integer> next = node.next;
            if (node.data < pivot) {
                if (frontStart == null) {
                    frontStart = node;
                    frontEnd = frontStart;
                } else {
                    frontEnd.next = node;
                    frontEnd = node;
                }
            } else {
                if (backStart == null) {
                    backStart = node;
                    backEnd = backStart;
                } else {
                    backEnd.next = node;
                    backEnd = node;
                }
            }

            node = next;
        }

        if (frontStart == null)
            return backStart;

        backEnd.next = null;
        frontEnd.next = backStart;


        return frontStart;
    }
}