package algosnds.lists;

import org.junit.Test;

import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsNull.nullValue;

public class LinkedListTest {

    @Test
    public void addition_to_lists() {
        LinkedList<Integer> list = createList(3, 4, 10);

        assertThat(list.root.data, is(3));
        list.root = list.root.next;

        assertThat(list.root.data, is(4));
        list.root = list.root.next;

        assertThat(list.root.data, is(10));
        list.root = list.root.next;

        assertThat(list.root, nullValue());
    }

    @Test
    public void length_for_list() {
        LinkedList<Integer> list = createList(3, 4, 10);
        assertThat(list.length(), is(3));
    }

    @Test
    public void addition_to_lists_to_head() {
        LinkedList<Integer> list = createList(3, 4, 10);
        list.addToHead(1);
        assertThat(list.length(), is(4));
        assertThat(list.root.data, is(1));
    }


    private <T> LinkedList<T> createList(T... elements) {
        LinkedList<T> finalList = new LinkedList<>();

        Stream.of(elements).forEach(finalList::addToTail);

        return finalList;
    }
}