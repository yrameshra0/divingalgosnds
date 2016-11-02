package algosnds.general;

import java.util.List;

public class BusPassBestCombinationPredictor {
    private static final int DAY_PRICE = 2;
    private static final int WEEK_PRICE = 7;
    private static final int MONTH_PRICE = 25;

    public int bestPrice(List<Integer> daysList) {
        int daysTravelling = daysList.size();

        if (daysTravelling < 4)
            return DAY_PRICE * daysTravelling;

        if (daysTravelling >= 23)
            return MONTH_PRICE;

        return combinationPricePredictor(daysList);
    }

    private int combinationPricePredictor(List<Integer> daysList) {
        int weekOffsetKeeper = 7;
        int priceAccumulator = 0;
        int daysCount = 0;
        for (Integer day : daysList) {
            if (day > weekOffsetKeeper) {
                weekOffsetKeeper += 8;
                priceAccumulator += decideWeeksPrice(daysCount);
                daysCount = 0;
            }

            daysCount++;
        }
        priceAccumulator += decideWeeksPrice(daysCount);

        return Math.min(priceAccumulator, MONTH_PRICE);
    }

    private int decideWeeksPrice(int daysCount) {
        if (daysCount > 3)
            return WEEK_PRICE;
        else
            return daysCount * DAY_PRICE;
    }
}