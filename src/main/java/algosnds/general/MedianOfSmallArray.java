package algosnds.general;

import java.util.Arrays;

import static java.lang.Math.max;
import static java.lang.Math.min;

// Algorithm details can be found at https://stackoverflow.com/questions/480960/code-to-calculate-median-of-five-in-c-sharp
public class MedianOfSmallArray {

    private static Integer median(Integer a, Integer b, Integer c) {
        return max(min(a, b), min(c, max(a, b)));
    }

    public static Integer findMedian(Integer[] array) {

        if (array.length == 1)
            return array[0];

        if (array.length == 2)
            return min(array[0], array[1]);

        if (array.length == 3)
            return median(array[0], array[1], array[2]);

        return median(redefineArray(array));
    }

    private static Integer[] redefineArray(Integer[] array) {
        Integer[] redefinedArray = Arrays.copyOf(array, 5);

        if (array.length == 4)
            redefinedArray[4] = Integer.MAX_VALUE;

        return redefinedArray;
    }


    private static void swapOnIndex(Integer[] array, int firstIndex, int secondIndex) {
        Integer temp = array[secondIndex];
        array[secondIndex] = array[firstIndex];
        array[firstIndex] = temp;
    }

    private static void sortOnIndex(Integer[] array, int firstIndex, int secondIndex) {
        if (array[firstIndex] < array[secondIndex])
            return;

        swapOnIndex(array, firstIndex, secondIndex);
    }

    private static Integer median(Integer[] array) {
        /**
         * a = A[0], b=A[1], c=A[2], d=A[3], e=A[4]
         */
        // makes a<b
        sortOnIndex(array, 0, 1);
        // makes c<d
        sortOnIndex(array, 2, 4);

        // eliminate the lowest -- comparing c<a
        if (array[2] < array[0]) {
            // swapping b and d
            swapOnIndex(array, 1, 4);
            // making c = a
            array[2] = array[0];
        }

        // getting in e now
        array[0] = array[4];

        //making a<b
        sortOnIndex(array, 0, 1);

        // eliminate another lowest -- comparing a<c
        // remaining a, b, d
        if (array[0] < array[2]) {
            // swapping b and d
            swapOnIndex(array, 1, 4);
            // making a = c
            array[0] = array[2];
        }

        // comparing d and a
        if (array[3] < array[0]) {
            // returning d
            return array[3];
        }

        // returning a
        return array[0];
    }
}
