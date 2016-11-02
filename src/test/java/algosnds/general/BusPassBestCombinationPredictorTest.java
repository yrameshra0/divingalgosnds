package algosnds.general;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class BusPassBestCombinationPredictorTest {
    BusPassBestCombinationPredictor predictor = new BusPassBestCombinationPredictor();

    @Test
    public void only_single_day_price_is_good_enough() {
        assertThat(predictor.bestPrice(travellingDays(1)), is(2));
        assertThat(predictor.bestPrice(travellingDays(1, 4)), is(4));
        assertThat(predictor.bestPrice(travellingDays(1, 10, 2)), is(6));
    }

    @Test
    public void only_month_price_is_good_enough() {
        assertThat(predictor.bestPrice(travellingDaysRangeClosed(1, 23)), is(25));
        assertThat(predictor.bestPrice(travellingDaysRangeClosed(1, 24)), is(25));
    }

    @Test
    public void combination_price_is_good_enough() {
        assertThat(predictor.bestPrice(travellingDays(1, 2, 4, 5, 7, 28, 29)), is(11));
        assertThat(predictor.bestPrice(travellingDays(
                1, 2, 4, 5, 7,
                9, 10, 11, 13, 15,
                16, 18, 20, 21, 22,
                24, 25, 26, 27, 28)), is(25));

        assertThat(predictor.bestPrice(travellingDays(
                1, 2, 4, 5, 7,
                9, 10, 11, 13, 15,
                22,
                28)), is(18));
    }

    private List<Integer> travellingDays(Integer... days) {
        return Stream.of(days).collect(Collectors.toList());
    }

    private List<Integer> travellingDaysRangeClosed(Integer startDay, Integer endDay) {
        List<Integer> daysList = new ArrayList<>(31);
        for (int i = startDay; i <= endDay; i++) {
            daysList.add(startDay);
        }
        return daysList;
    }
}