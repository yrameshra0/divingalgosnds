package algosnds.lists;

import org.junit.Test;

import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class SumListsTest {

    @Test
    public void add_two_equal_sized_reversed_linked_lists() {
        SumLists sumlists = new SumLists();

        LinkedList<Integer> summedList = sumlists.addReverseList(createList(7, 1, 6), createList(5, 9, 2));

        assertThat(summedList, is(createList(2, 1, 9)));
    }

    @Test
    public void add_two_unequal_sized_reversed_linked_lists() {
        SumLists sumlists = new SumLists();

        assertThat(sumlists.addReverseList(createList(4, 3, 9, 1), createList(4, 3, 9)), is(createList(8, 6, 8, 2)));
        assertThat(sumlists.addReverseList(createList(4, 3, 9), createList(4, 3, 9, 1)), is(createList(8, 6, 8, 2)));
    }

    @Test
    public void add_two_equal_sized_reversed_linked_lists_pending_carry() {
        SumLists sumlists = new SumLists();

        assertThat(sumlists.addReverseList(createList(4, 3, 9), createList(4, 3, 9)), is(createList(8, 6, 8, 1)));
    }

    @Test
    public void add_two_forward_linked_lists() {
        SumLists sumlists = new SumLists();

        assertThat(sumlists.addForwardList(createList(6, 1, 7), createList(9, 5)), is(createList(7, 1, 2)));
        assertThat(sumlists.addForwardList(createList(9, 3, 4), createList(9, 3, 4)), is(createList(1, 8, 6, 8)));
    }

    private LinkedList<Integer> createList(Integer... elements) {
        LinkedList<Integer> finalList = new LinkedList<>();

        Stream.of(elements).forEach(finalList::addToTail);

        return finalList;
    }
}