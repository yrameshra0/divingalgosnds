package algosnds.lists;

import org.junit.Test;

import static algosnds.lists.LinkedListTest.createList;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.MatcherAssert.assertThat;

public class IntersectionListsTest {
    private IntersectionLists intersectionLists = new IntersectionLists();

    @Test
    public void finds_intersection() {
        LinkedList<Integer> first = createList(1, 2, 3, 4, 5, 6, 7);
        LinkedList<Integer> second = createList(1, 4, 5, 6, 7);

        assertThat(intersectionLists.findIntersection(first, second), is(createList(4, 5, 6, 7).root));
        assertThat(intersectionLists.findIntersection(createList(1), createList(2)), is(nullValue()));
    }
}