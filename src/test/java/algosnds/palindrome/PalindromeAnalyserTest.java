package algosnds.palindrome;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class PalindromeAnalyserTest {
    private PalindromeAnalyser analyser = new PalindromeAnalyser();

    @Test
    public void verify_is_input_string_a_palindrome() {
        assertThat(analyser.isPalindrome("Taco cat"), is(true));
    }

    @Test
    public void verify_is_input_string_not_a_palindrome() {
        assertThat(analyser.isPalindrome("Tacod cat"), is(false));
    }
}