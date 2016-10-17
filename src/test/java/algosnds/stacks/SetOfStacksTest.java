package algosnds.stacks;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class SetOfStacksTest {
    SetOfStacks setOfStacks = new SetOfStacks(2);

    @Test
    public void push_pop_into_set_stacks() {
        assertThat(setOfStacks.setsLength(), is(1));

        setOfStacks.push(1);
        setOfStacks.push(2);
        setOfStacks.push(3);

        assertThat(setOfStacks.setsLength(), is(2));
        assertThat(setOfStacks.pop(), is(3));
        assertThat(setOfStacks.setsLength(), is(1));
    }
}