package algosnds.lists;

import org.junit.Test;

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

    @Test
    public void verify_palindrome_by_reversing_list() {
        LinkedList<String> list = palindromeList();

        assertThat(palindrome.verifyByReverse(list), is(true));

        list.addToTail("a");

        assertThat(palindrome.verifyByReverse(list), is(false));
    }

    @Test
    public void verify_palindrome_by_runner_traversal() {
        LinkedList<String> list = palindromeList();

        assertThat(palindrome.verifyByRunner(list), is(true));

        list.addToTail("a");

        assertThat(palindrome.verifyByRunner(list), is(false));
    }
}