package algosnds.arraysnstrings;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class CompressionTest {
    private Compression compression = new Compression();

    @Test
    public void compress_input_stringg() {

        String compressedString = compression.compress("aaaabbcddddef");

        assertThat(compressedString, is("a4b2cd4ef"));
    }
}