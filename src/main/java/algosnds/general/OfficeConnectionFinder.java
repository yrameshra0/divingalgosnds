package algosnds.general;

import static java.lang.Integer.MAX_VALUE;
import static java.lang.Integer.MIN_VALUE;
import static java.util.Arrays.stream;
import static java.util.stream.IntStream.range;

public class OfficeConnectionFinder {
    private final int numberOfOffices;
    private final int numberOfPaths;
    private final int[] startingPoints;
    private final int[] endingPoints;
    private final int[] costOfPath;
    private final int[] maximumCostPath;
    private final int[] minimumCostPath;

    public OfficeConnectionFinder(int numberOfOffices,
                                  int numberOfPaths,
                                  int[] startingPoints,
                                  int[] endingPoints,
                                  int[] costOfPath) {
        this.numberOfOffices = numberOfOffices;
        this.numberOfPaths = numberOfPaths;
        this.startingPoints = startingPoints;
        this.endingPoints = endingPoints;
        this.costOfPath = costOfPath;
        this.maximumCostPath = new int[numberOfOffices];
        this.minimumCostPath = new int[numberOfOffices];

        initializeCostPaths(numberOfOffices);
    }

    private void initializeCostPaths(int numberOfOffices) {
        range(0, numberOfOffices).forEach(idx -> {
            maximumCostPath[idx] = MIN_VALUE;
            minimumCostPath[idx] = MAX_VALUE;
        });
    }

    public int[] findMinAndMaxCost(int startingPoint) {
        startPointManipulation(startingPoint);

        range(0, numberOfOffices).forEach(idx -> {
            int pointToIndex = pointToIndex(endingPoints[idx]);
            int costOfPath = this.costOfPath[idx];
            if (maximumCostPath[pointToIndex] < costOfPath)
                maximumCostPath[pointToIndex] = costOfPath;

            if (minimumCostPath[pointToIndex] > costOfPath)
                minimumCostPath[pointToIndex] = costOfPath;
        });

        int maximum = stream(maximumCostPath, 0, numberOfOffices).sum();
        int minimum = stream(minimumCostPath, 0, numberOfOffices).sum();

        return new int[]{minimum, maximum};
    }

    private void startPointManipulation(int startingPoint) {
        int pointToIndex = pointToIndex(startingPoint);
        maximumCostPath[pointToIndex] = 0;
        minimumCostPath[pointToIndex] = 0;
    }

    private int pointToIndex(int point) {
        return point - 1;
    }
}
