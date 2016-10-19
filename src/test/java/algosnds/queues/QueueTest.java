package algosnds.queues;

import org.junit.Test;

import java.util.NoSuchElementException;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.fail;

public class QueueTest {
    private Queue<Integer> queue = new Queue<>();

    @Test
    public void adding_removing_from_queue() {
        queue.add(1);
        queue.add(2);
        queue.add(3);

        assertThat(queue.remove(), is(1));
    }

    @Test
    public void peeking_into_queue() {
        queue.add(1);
        queue.add(2);
        queue.add(3);

        assertThat(queue.peek(), is(1));
    }

    @Test
    public void verifying_queue_emptiness() {
        assertThat(queue.isEmpty(), is(true));

        queue.add(1);

        assertThat(queue.isEmpty(), is(false));
    }

    @Test
    public void removing_peeking_from_empty_queue() {
        assertNoSuchElementException(() -> queue.peek());
        assertNoSuchElementException(() -> queue.remove());
    }

    private void assertNoSuchElementException(Runnable actualFnCall) {
        try {
            actualFnCall.run();
            fail();
        } catch (Exception e) {
            assertThat(e, instanceOf(NoSuchElementException.class));
        }
    }
}