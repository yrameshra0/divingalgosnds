package algosnds.lists;

import org.junit.Test;

import static algosnds.lists.Node.newNode;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.MatcherAssert.assertThat;

public class CircularLinkedListTest {
    private CircularLinkedList circularLinkedList = new CircularLinkedList();
    private Node<Integer> A = newNode(1);
    private Node<Integer> B = newNode(2);
    private Node<Integer> C = newNode(3);
    private Node<Integer> D = newNode(4);
    private Node<Integer> E = newNode(5);
    private Node<Integer> F = newNode(6);
    private Node<Integer> G = newNode(7);

    @Test
    public void returns_location_at_which_list_is_circular() {
        A.next = B;
        B.next = C;
        C.next = D;
        D.next = E;
        E.next = F;
        F.next = G;
        G.next = C;
        Node<Integer> list = A;

        assertThat(circularLinkedList.circularAt(list), is(C));
    }

    @Test
    public void returns_null_for_non_circular_list() {
        A.next = B;
        B.next = C;
        C.next = D;
        D.next = E;
        E.next = F;
        F.next = G;
        Node<Integer> list = A;

        assertThat(circularLinkedList.circularAt(list), is(nullValue()));
    }
}