package algosnds.lists;

import org.junit.Test;

import java.util.function.Function;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class PalindromeListTest {
    PalindromeList palindrome = new PalindromeList();

    private LinkedList<String> palindromeList() {
        LinkedList<String> list = new LinkedList<>();
        list.addToTail("a");
        list.addToTail("b");
        list.addToTail("a");

        return list;
    }

    private void assertPalindrome(Function<LinkedList<String>, Boolean> function) {
        LinkedList<String> list = palindromeList();

        assertThat(function.apply(list), is(true));

        list.addToTail("a");

        assertThat(function.apply(list), is(false));
    }

    @Test
    public void verify_palindrome_by_reversing_list() {
        assertPalindrome(palindrome::verifyByReverse);
    }

    @Test
    public void verify_palindrome_by_runner_traversal() {
        assertPalindrome(palindrome::verifyByRunner);
    }

    @Test
    public void verify_palindrome_by_recursion() throws Exception {
        assertPalindrome(palindrome::verifyByRecursion);
    }
}