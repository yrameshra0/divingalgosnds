package algosnds.general;


import org.junit.Test;

import static algosnds.general.KthSmallestElement.findKthElement;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class KthSmallestElementTest {

    @Test
    public void deterministic_pivot_element_search() {

        Integer[] elementArray = {
                800, 100, 200, 124, 160,
                105, 1, 69, 34, 60,
                503, 340, 260, 205, 234,
                821, 201, 701, 502, 601,
                239, 603, 235, 710, 653
        };
        int k = 7;

        Integer expectedValue = 124;

        assertThat(expectedValue, is(findKthElement(elementArray, k)));
    }

}
