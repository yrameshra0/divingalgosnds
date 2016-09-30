package algosnds.lists;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsNull.nullValue;

public class LinkedListTest {

    @Test
    public void addition_to_lists() {
        LinkedList<Integer> list = new LinkedList<>();
        list.addToTail(3);
        list.addToTail(4);
        list.addToTail(10);

        assertThat(list.root.data, is(3));
        list.root = list.root.next;

        assertThat(list.root.data, is(4));
        list.root = list.root.next;

        assertThat(list.root.data, is(10));
        list.root = list.root.next;

        assertThat(list.root, nullValue());
    }
}