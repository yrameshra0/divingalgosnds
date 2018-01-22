package algosnds.general;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class OfficeConnectionFinderTest {

    @Test
    public void minimum_and_maximum_cost_finder_for_5_node_problem() {
        int numberOfOffices = 5;
        int numberOfPaths = 5;
        int[] startingPoints = {1, 2, 4, 2, 1};
        int[] endingPoints = {3, 4, 5, 3, 2};
        int[] costOfPath = {5, 1, 7, 2, 5};
        int startingPoint = 1;
        int[] expectedCosts = {15, 18};

        assertCostFinder(
                numberOfOffices,
                numberOfPaths,
                startingPoints,
                endingPoints,
                costOfPath,
                startingPoint,
                expectedCosts
        );
    }

    @Test
    public void minimum_and_maximum_cost_finder_for_3_node_problem() {
        int numberOfOffices = 3;
        int numberOfPaths = 3;
        int[] startingPoints = {1, 2, 1};
        int[] endingPoints = {3, 3, 2};
        int[] costOfPath = {5, 2, 5};
        int startingPoint = 1;
        int[] expectedCosts = {7, 10};

        assertCostFinder(
                numberOfOffices,
                numberOfPaths,
                startingPoints,
                endingPoints,
                costOfPath,
                startingPoint,
                expectedCosts
        );
    }

    private void assertCostFinder(int numberOfOffices,
                                  int numberOfPaths,
                                  int[] startingPoints,
                                  int[] endingPoints,
                                  int[] costOfPath,
                                  int startingPoint,
                                  int[] expectedCosts) {
        OfficeConnectionFinder connectionFinder = new OfficeConnectionFinder(
                numberOfOffices,
                numberOfPaths,
                startingPoints,
                endingPoints,
                costOfPath);

        int[] minAndMaxCost = connectionFinder.findMinAndMaxCost(startingPoint);

        assertThat(minAndMaxCost, is(expectedCosts));
    }
}
