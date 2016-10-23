package algosnds.stacks;

import org.junit.Test;

import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;


public class StackSortingTest {
    private StackSorting stackSorting = new StackSorting();

    @Test
    public void sort_stack() {
        Stack<Integer> inputStack = new Stack<>();

        pushToStack(inputStack, 1, 3, 5, 4, 2, 7);

        Stack<Integer> expectedStack = new Stack<>();
        pushToStack(expectedStack, 7, 5, 4, 3, 2, 1);

        stackSorting.sort(inputStack);

        while (!expectedStack.isEmpty()) {
            assertThat(inputStack.peek(), is(expectedStack.peek()));
            assertThat(inputStack.pop(), is(expectedStack.pop()));
        }
    }

    private void pushToStack(Stack<Integer> stack, Integer... elements) {
        Stream.of(elements).forEach(stack::push);
    }
}