package algosnds.stacks;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class StackMinTest {
    @Test
    public void minimum_value_in_stack() {
        StackMin stackMin = new StackMin();
        stackMin.push(5);
        assertThat(stackMin.min(), is(5));

        stackMin.push(6);
        assertThat(stackMin.min(), is(5));

        stackMin.push(3);
        assertThat(stackMin.min(), is(3));

        stackMin.push(7);
        assertThat(stackMin.min(), is(3));

        stackMin.pop();
        assertThat(stackMin.min(), is(3));

        stackMin.pop();
        assertThat(stackMin.min(), is(5));
    }
}