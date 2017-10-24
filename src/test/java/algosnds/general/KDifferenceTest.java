package algosnds.general;

import algosnds.general.KDifference.Pair;
import org.junit.Test;

import java.util.Set;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class KDifferenceTest {

    @Test
    public void fetch_pairs_where_k_difference_satisfies() throws Exception {
        Integer[] arrayOfElements = {1, 5, 3, 4, 2};
        Integer kDifference = 2;

        KDifference kDifferenceCalculator = new KDifference();
        Set<Pair> pairs = kDifferenceCalculator.kDifferencePairs(arrayOfElements, kDifference);

        assertThat(pairs, contains(is(new Pair(3, 1)), is(new Pair(4, 2)), is(new Pair(5, 3))));
    }
}