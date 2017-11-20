package algosnds.general;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.max;
import static java.lang.Math.min;

// Algorithm details can be found at https://stackoverflow.com/questions/480960/code-to-calculate-median-of-five-in-c-sharp
public class MedianOfSmallArray {

    private static Integer median(Integer a, Integer b, Integer c) {
        return max(min(a, b), min(c, max(a, b)));
    }

    public static Integer findMedian(List<Integer> elements) {

        int size = elements.size();
        if (size == 1)
            return elements.get(0);

        if (size == 2)
            return min(elements.get(0), elements.get(1));

        if (size == 3)
            return median(elements.get(0), elements.get(1), elements.get(2));

        return median(redefineArray(elements));
    }

    private static List<Integer> redefineArray(List<Integer> elements) {
        if (elements.size() > 4)
            return elements;

        List<Integer> redefinedArray = new ArrayList<>(5);
        redefinedArray.addAll(elements);
        redefinedArray.add(Integer.MAX_VALUE);

        return redefinedArray;
    }


    private static void swapOnIndex(List<Integer> elements, int firstIndex, int secondIndex) {
        Integer temp = elements.get(secondIndex);
        elements.set(secondIndex, elements.get(firstIndex));
        elements.set(firstIndex, temp);
    }

    private static void sortOnIndex(List<Integer> elements, int firstIndex, int secondIndex) {
        if (elements.get(firstIndex) < elements.get(secondIndex))
            return;

        swapOnIndex(elements, firstIndex, secondIndex);
    }

    private static Integer median(List<Integer> elements) {
        /**
         * a = A[0], b=A[1], c=A[2], d=A[3], e=A[4]
         */
        // makes a<b
        sortOnIndex(elements, 0, 1);
        // makes c<d
        sortOnIndex(elements, 2, 4);

        // eliminate the lowest -- comparing c<a
        if (elements.get(2) < elements.get(0)) {
            // swapping b and d
            swapOnIndex(elements, 1, 4);
            // making c = a
            elements.set(2, elements.get(0));
        }

        // getting in e now
        elements.set(0, elements.get(4));

        //making a<b
        sortOnIndex(elements, 0, 1);

        // eliminate another lowest -- comparing a<c
        // remaining a, b, d
        if (elements.get(0) < elements.get(2)) {
            // swapping b and d
            swapOnIndex(elements, 1, 4);
            // making a = c
            elements.set(0, elements.get(2));
        }

        // comparing d and a
        if (elements.get(3) < elements.get(0)) {
            // returning d
            return elements.get(3);
        }

        // returning a
        return elements.get(0);
    }
}
