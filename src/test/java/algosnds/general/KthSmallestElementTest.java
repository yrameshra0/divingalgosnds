package algosnds.general;


import org.junit.Ignore;
import org.junit.Test;

import java.util.*;
import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.stream.Collectors;

import static algosnds.general.KthSmallestElement.findKthElementDeterministic;
import static algosnds.general.KthSmallestElement.findKthElementRandom;
import static java.util.stream.LongStream.range;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class KthSmallestElementTest {
    public static final Integer MAX_ITERATIONS_NO = 1_000_000;

    private static Integer kThElement = 7;
    private static Integer expectedValue = 124;
    private static Runnable deterministicAssertion = () -> {
        assertThat(expectedValue, is(findKthElementDeterministic(elementsList(), kThElement)));
    };

    private static Runnable randomizedAssertion = () -> {
        assertThat(expectedValue, is(findKthElementRandom(elementsList(), kThElement)));
    };

    private static List<Integer> elementsList() {
        Integer[] elementArray = {
                800, 100, 200, 124, 160,
                105, 1, 69, 34, 60,
                503, 340, 260, 205, 234,
                821, 201, 701, 502, 601,
                239, 603, 235, 710, 653
        };

        List<Integer> elements = new ArrayList<>(10_000);
        elements.addAll(Arrays.asList(elementArray));
        Random random = new Random();

        range(25, 10_000).forEach(idx -> {
            elements.add(900 + random.nextInt(9_000));
        });

        return elements;
    }

    @Test
    public void using_deterministic_median_algorithm_internally() {
        deterministicAssertion.run();
    }

    @Test
    public void using_random_median_algorithm_internally() {
        randomizedAssertion.run();
    }

    @Test
    @Ignore
    // Comparison test only
    public void heuristic_comparisons_between_internal_algos() {
        BiConsumer<TreeSet<Long>, String> printHeuristics = (set, type) -> {
            System.out.println("============ ALGORITHM TYPE ============");
            System.out.println(type.toUpperCase());
            System.out.println("=========== TIME TAKEN (nanos) =============");
            System.out.println(String.format("MINIMUM --> %d", set.first()));
            System.out.println(String.format("MAXIMUM --> %d", set.last()));

            Long reduceRandom = set.stream()
                    .reduce(0L,
                            (value, incoming) -> value + incoming);
            System.out.println("AVERAGE --> " + (reduceRandom / MAX_ITERATIONS_NO));
            System.out.println("========================");
        };

        Function<Runnable, TreeSet<Long>> iterateAndCollect = (assertion) -> {
            return range(0, MAX_ITERATIONS_NO)
                    .boxed()
                    .parallel()
                    .map(idx -> {
                        long startTime = System.nanoTime();
                        assertion.run();
                        return System.nanoTime() - startTime;
                    })
                    .collect(Collectors.toCollection(TreeSet::new));
        };

        range(0, 1)
                .forEach(odx -> {
                    TreeSet<Long> deterministicTimes = iterateAndCollect.apply(deterministicAssertion);
                    TreeSet<Long> randomizedTimes = iterateAndCollect.apply(randomizedAssertion);

                    System.out.println("<--- | " + odx + " | --->");
                    printHeuristics.accept(deterministicTimes, "deterministic");
                    printHeuristics.accept(randomizedTimes, "random");
                });
    }

}
