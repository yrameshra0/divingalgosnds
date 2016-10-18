package algosnds.stacks;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.fail;

public class SetOfStacksTest {
    SetOfStacks setOfStacks = new SetOfStacks(2);

    @Test
    public void push_pop_into_set_stacks() {
        assertThat(setOfStacks.setsLength(), is(0));

        setOfStacks.push(1);
        setOfStacks.push(2);
        setOfStacks.push(3);

        assertThat(setOfStacks.setsLength(), is(2));
        assertThat(setOfStacks.pop(), is(3));
        assertThat(setOfStacks.setsLength(), is(1));
    }


    @Test
    public void pop_at_particular_index() {
        SetOfStacks setOfStacks = new SetOfStacks(3);
        setOfStacks.push(11);
        setOfStacks.push(22);
        setOfStacks.push(33);
        setOfStacks.push(44);
        setOfStacks.push(55);
        setOfStacks.push(66);

        assertThat(setOfStacks.popAt(0), is(11));
        assertThat(setOfStacks.popAt(2), is(44));
        assertThat(setOfStacks.popAt(2), is(55));
    }

    @Test
    public void pop_at_particular_index_for_incorrect_index() {
        SetOfStacks setOfStacks = new SetOfStacks(3);
        setOfStacks.push(11);

        assertIndexOutOfBounds(() -> setOfStacks.popAt(100));
        assertIndexOutOfBounds(() -> setOfStacks.popAt(-100));
    }

    private void assertIndexOutOfBounds(Runnable actualFnCall) {
        try {
            actualFnCall.run();
            fail();
        } catch (Exception e) {
            assertThat(e, instanceOf(IndexOutOfBoundsException.class));
        }
    }
}