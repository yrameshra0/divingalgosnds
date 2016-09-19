package algosnds.urlify;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class URLifyTest {
    URLify urlify = new URLify();

    @Test
    public void replace_spaces() {
        char[] inputArray = {'M', 'r', '.', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' '};
        char[] expectedArray = {'M', 'r', '.', '%', '2', '0', 'J', 'o', 'h', 'n', '%', '2', '0', 'S', 'm', 'i', 't', 'h'};

        urlify.replaceSpaces(inputArray, 14);

        assertThat(inputArray, is(expectedArray));
    }

    @Test
    public void when_no_spaces() {
        char[] inputArray = {'J', 'o', 'h', 'n'};

        urlify.replaceSpaces(inputArray, 4);

        assertThat(inputArray, is(inputArray));
    }
}
