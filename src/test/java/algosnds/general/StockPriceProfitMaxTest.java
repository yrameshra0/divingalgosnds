package algosnds.general;

import org.junit.Test;

import java.util.Collections;
import java.util.List;

import static java.util.Arrays.asList;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class StockPriceProfitMaxTest {
    private StockPriceProfitMax stockPriceProfitMax = new StockPriceProfitMax();

    @Test
    public void when_last_day_has_minimum_price() {
        assertMaximumProfit(new int[]{100, 180, 260, 310, 535, 695, 40}, asList(0, 5));
    }

    @Test
    public void when_first_day_has_minimum_price() {
        assertMaximumProfit(new int[]{100, 180, 260, 310, 535, 695}, asList(0, 5));
    }

    @Test
    public void when_multiple_days_have_maximum_profit() {
        assertMaximumProfit(new int[]{100, 180, 260, 310, 40, 535, 695}, asList(4, 6, 0, 3));
    }

    @Test
    public void when_no_maximum_profit_can_be_made() {
        assertMaximumProfit(new int[]{100, 90, 80, 70, 60, 50}, Collections.emptyList());
    }

    private void assertMaximumProfit(int[] stockPrices, List<Integer> expectedOutput) {
        List<Integer> daysOfMaxProfit = stockPriceProfitMax.deviceDaysOfMaxProfit(stockPrices);

        assertThat(daysOfMaxProfit, is(expectedOutput));
    }
}