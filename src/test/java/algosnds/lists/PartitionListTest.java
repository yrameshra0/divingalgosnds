package algosnds.lists;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsNull.nullValue;

public class PartitionListTest {

    private PartitionList partitionList = new PartitionList();

    @Test
    public void partition_list() {
        LinkedList<Integer> list = new LinkedList();
        list.addToTail(3);
        list.addToTail(5);
        list.addToTail(8);
        list.addToTail(5);
        list.addToTail(10);
        list.addToTail(2);
        list.addToTail(1);

        Node root = partitionList.partition(list.root, 5);

        assertThat(root.data, is(3));
        root = root.next;

        assertThat(root.data, is(2));
        root = root.next;

        assertThat(root.data, is(1));
        root = root.next;

        assertThat(root.data, is(5));
        root = root.next;

        assertThat(root.data, is(8));
        root = root.next;

        assertThat(root.data, is(5));
        root = root.next;

        assertThat(root.data, is(10));
        root = root.next;

        assertThat(root, nullValue());
    }
}