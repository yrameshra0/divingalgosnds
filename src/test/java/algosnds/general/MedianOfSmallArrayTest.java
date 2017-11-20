package algosnds.general;

import org.junit.Test;

import static algosnds.general.MedianOfSmallArray.findMedian;
import static java.util.Arrays.asList;
import static java.util.Collections.singletonList;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class MedianOfSmallArrayTest {

    @Test
    public void fetch_median_for_5_elements() throws Exception {
        Integer expectedMedian = 15;

        assertThat(findMedian(asList(25, 20, 10, 15, 5)), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_4_elements() throws Exception {
        Integer expectedMedian = 15;

        assertThat(findMedian(asList(25, 20, 10, 15)), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_3_elements() throws Exception {
        Integer expectedMedian = 2;

        assertThat(findMedian(asList(1, 2, 3)), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_2_elements() throws Exception {
        Integer expectedMedian = 1;

        assertThat(findMedian(asList(1, 2)), is(expectedMedian));
    }

    @Test
    public void fetch_median_for_1_element() throws Exception {
        Integer expectedMedian = 1;

        assertThat(findMedian(singletonList(1)), is(expectedMedian));
    }
}
