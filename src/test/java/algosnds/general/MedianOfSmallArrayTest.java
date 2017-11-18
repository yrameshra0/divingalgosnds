package algosnds.general;

import org.junit.Test;

import static algosnds.general.MedianOfSmallArray.findMedian;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class MedianOfSmallArrayTest {

    @Test
    public void fetch_median_for_5_elements() throws Exception {
        Integer[] arrayOf5Elements = {25, 20, 10, 15, 5};
        Integer expectedMedian = 15;

        assertThat(findMedian(arrayOf5Elements), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_4_elements() throws Exception {
        Integer[] arrayOf5Elements = {25, 20, 10, 15};
        Integer expectedMedian = 15;

        assertThat(findMedian(arrayOf5Elements), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_3_elements() throws Exception {
        Integer[] arrayOf5Elements = {1, 2, 3};
        Integer expectedMedian = 2;

        assertThat(findMedian(arrayOf5Elements), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_2_elements() throws Exception {
        Integer[] arrayOf5Elements = {1, 2};
        Integer expectedMedian = 1;

        assertThat(findMedian(arrayOf5Elements), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_1_element() throws Exception {
        Integer[] arrayOf5Elements = {1};
        Integer expectedMedian = 1;

        assertThat(findMedian(arrayOf5Elements), is(expectedMedian));
    }
}
