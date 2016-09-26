package algosnds.arraysnstrings;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class StringRotationTest {
    private StringRotation rotation = new StringRotation();

    @Test
    public void for_success_cases() {
        assertThat(rotation.verify("waterbottle", "erbottlewat"), is(true));
    }

    @Test
    public void for_irregular_cases() {
        assertThat(rotation.verify("waterbottle", "chilledbottle"), is(false));
    }

    @Test
    public void for_regular_non_rotated_cases() {
        assertThat(rotation.verify("waterbottle", "atewrbottle"), is(false));
    }
}