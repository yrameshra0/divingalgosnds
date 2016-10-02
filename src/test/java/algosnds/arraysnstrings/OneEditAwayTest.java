package algosnds.arraysnstrings;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class OneEditAwayTest {

    OneEditAway oneEditAway = new OneEditAway();

    @Test
    public void verify_two_strings_are_one_edit_away() {
        assertThat(oneEditAway.verify("pale", "ple"), is(true));
        assertThat(oneEditAway.verify("ple", "pale"), is(true));
        assertThat(oneEditAway.verify("pale", "pabe"), is(true));
        assertThat(oneEditAway.verify("pale", "pabl"), is(false));
        assertThat(oneEditAway.verify("pale", "pe"), is(false));
        assertThat(oneEditAway.verify("ple", "pafe"), is(false));
    }
}