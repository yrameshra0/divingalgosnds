package algosnds.general;

import java.util.ArrayList;
import java.util.List;

public class StockPriceProfitMax {

    public List<Integer> deviceDaysOfMaxProfit(int[] stockPrices) {
        int startIndex = 0;
        int endIndex = stockPrices.length;
        List<Integer> daysList = new ArrayList<>();
        while (startIndex < endIndex) {
            int minPriceDay = findLeastPricedDay(stockPrices, startIndex, endIndex);
            int maxPriceDay = findMostPricedDay(stockPrices, minPriceDay, endIndex);

            if (minPriceDay != maxPriceDay && minPriceDay < maxPriceDay) {
                daysList.add(minPriceDay);
                daysList.add(maxPriceDay);
            }

            endIndex = minPriceDay;
        }

        return daysList;
    }

    private int findLeastPricedDay(int[] stockPrices, int startIndex, int endIndex) {
        int minPrice = Integer.MAX_VALUE;
        int minPriceDay = -1;
        for (int i = startIndex; i < endIndex; i++) {
            if (stockPrices[i] < minPrice) {
                minPrice = stockPrices[i];
                minPriceDay = i;
            }
        }

        return minPriceDay;
    }

    private int findMostPricedDay(int[] stockPrices, int startIndex, int endIndex) {
        int maxPrice = Integer.MIN_VALUE;
        int maxPriceDay = -1;
        for (int i = endIndex - 1; i >= startIndex; i--) {
            if (stockPrices[i] > maxPrice) {
                maxPrice = stockPrices[i];
                maxPriceDay = i;
            }
        }

        return maxPriceDay;
    }

}