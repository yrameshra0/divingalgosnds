package algosnds.stacks;

import org.junit.Test;

import java.util.EmptyStackException;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class StackTest {
    private Stack<Integer> stack = new Stack<>();

    @Test
    public void pushing_poping_items_over_stack() {
        stack.push(1);
        stack.push(2);

        assertThat(stack.pop(), is(2));
        assertThat(stack.pop(), is(1));
    }

    @Test
    public void verify_stack_emptiness() {
        assertThat(stack.isEmpty(), is(true));

        stack.push(1);

        assertThat(stack.isEmpty(), is(false));
    }

    @Test
    public void peeking_onto_stack() {
        stack.push(1);
        stack.push(2);

        assertThat(stack.peek(), is(2));
        stack.pop();
        assertThat(stack.peek(), is(1));
    }

    @Test
    public void throws_error_for_operations_on_empty_stack() {
        assertEmptyStackException(() -> stack.peek());
        assertEmptyStackException(() -> stack.pop());
    }

    private void assertEmptyStackException(Runnable runnable) {
        try {
            runnable.run();
            fail();
        } catch (Exception e) {
            assertEquals(e.getClass(), EmptyStackException.class);
        }
    }

    @Test
    public void stack_length(){
        assertThat(stack.length(), is(0));

        stack.push(1);

        assertThat(stack.length(), is(1));
    }
}