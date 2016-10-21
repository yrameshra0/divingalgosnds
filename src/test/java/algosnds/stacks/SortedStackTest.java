package algosnds.stacks;

import org.junit.Test;

import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;


public class SortedStackTest {
    SortedStack sortedStack = new SortedStack();

    @Test
    public void push_pop_peek_sorted_stack() {
        pushToStack(sortedStack, 1, 3, 5, 4, 2, 7);

        Stack<Integer> expectedStack = new Stack<>();
        pushToStack(expectedStack, 7, 5, 4, 3, 2, 1);

        while (!expectedStack.isEmpty()) {
            assertThat(sortedStack.peek(), is(expectedStack.peek()));
            assertThat(sortedStack.pop(), is(expectedStack.pop()));
        }
    }

    private void pushToStack(Stack<Integer> stack, Integer... elements) {
        Stream.of(elements).forEach(stack::push);
    }
}