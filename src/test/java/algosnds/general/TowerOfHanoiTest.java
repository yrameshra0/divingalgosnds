package algosnds.general;

import algosnds.stacks.Stack;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.is;
public class TowerOfHanoiTest {

    @Test
    public void play_tower_of_hanoi() throws Exception {
        Stack<Integer> sourceTower = new Stack<>();
        sourceTower.push(5);
        sourceTower.push(4);
        sourceTower.push(3);
        sourceTower.push(2);
        sourceTower.push(1);

        Stack<Integer> destinationTower = new Stack<>();

        TowerOfHanoi.shiftFromSourceToDestination(sourceTower, destinationTower);

        assertThat(sourceTower.isEmpty(), is(true));

        assertThat(destinationTower.pop(), is(1));
        assertThat(destinationTower.pop(), is(2));
        assertThat(destinationTower.pop(), is(3));
        assertThat(destinationTower.pop(), is(4));
        assertThat(destinationTower.pop(), is(5));
    }
}
