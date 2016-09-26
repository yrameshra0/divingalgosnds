package algosnds.arraysnstrings;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class RomanNumeralTest {
    @Test
    public void single_numerals() {
        assertThat(RomanNumeral.convert("I"), is(1));
        assertThat(RomanNumeral.convert("V"), is(5));
        assertThat(RomanNumeral.convert("X"), is(10));
        assertThat(RomanNumeral.convert("L"), is(50));
        assertThat(RomanNumeral.convert("C"), is(100));
        assertThat(RomanNumeral.convert("D"), is(500));
        assertThat(RomanNumeral.convert("M"), is(1000));
    }

    @Test
    public void double_numerals() {
        assertThat(RomanNumeral.convert("II"), is(2));
        assertThat(RomanNumeral.convert("IV"), is(4));
        assertThat(RomanNumeral.convert("VI"), is(6));
        assertThat(RomanNumeral.convert("IX"), is(9));
        assertThat(RomanNumeral.convert("XI"), is(11));
    }

    @Test
    public void triple_numerals() {
        assertThat(RomanNumeral.convert("III"), is(3));
        assertThat(RomanNumeral.convert("VII"), is(7));
        assertThat(RomanNumeral.convert("XII"), is(12));
    }

    @Test
    public void random_numerals() {
        assertThat(RomanNumeral.convert("CMXCIX"), is(999));
    }
}