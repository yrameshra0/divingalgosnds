package algosnds.queues;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class QueueFromStackTest {
    private QueueFromStack<Integer> queue = new QueueFromStack<>();

    @Test
    public void add_and_remove_from_queue() {
        queue.add(1);
        queue.add(2);
        queue.add(3);

        assertThat(queue.peek(), is(1));
        assertThat(queue.remove(), is(1));

        queue.add(4);
        queue.add(5);

        assertThat(queue.remove(), is(2));
        assertThat(queue.remove(), is(3));
        assertThat(queue.remove(), is(4));
    }
}