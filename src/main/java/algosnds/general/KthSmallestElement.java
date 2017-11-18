package algosnds.general;

import static algosnds.general.MedianOfSmallArray.findMedian;
import static java.lang.Math.floorDiv;
import static java.util.Arrays.copyOf;

public class KthSmallestElement {

    /**
     * +------------------------------------------------------------------------------------------------------------------
     * Steps to find the k-th smallest element
     * +------------------------------------------------------------------------------------------------------------------
     * Using an deterministic pivot finding algorithm
     * +------------------------------------------------------------------------------------------------------------------
     * 1) Divide the input array into pockets of 5 elements
     * 2) Inside each pocket find median in O(1)
     * 3) Medians of all the pockets should be collated and we need to find median from this pocket
     * 4) Using the final median as a pivot partition the input array
     * 5) Compare the k and length of partition
     * a) If l>=k then we know the k-th smallest element if from first partition
     * b) If l<k then the k-th smallest element from the entire list is also (k-l)th element from second list.
     * +------------------------------------------------------------------------------------------------------------------
     */

    public static Integer findKthElement(Integer[] array, Integer k) {
        if (k == 1)
            return array[0]; //base case

        Integer pivot = findPivot(array);
        Integer[] greaterThanPivot = new Integer[array.length];
        Integer[] lesserThanPivot = new Integer[array.length];
        int greaterIndex = 0;
        int lesserIndex = 0;

        for (int idx = 0; idx < array.length; idx++) {
            if (array[idx] <= pivot) {
                lesserThanPivot[lesserIndex] = array[idx];
                lesserIndex++;
            } else {
                greaterThanPivot[greaterIndex] = array[idx];
                greaterIndex++;
            }
        }

        if (lesserIndex < k)
            return findKthElement(copyOf(greaterThanPivot, greaterIndex), k - lesserIndex);
        else
            return findKthElement(copyOf(lesserThanPivot, lesserIndex), k);

    }

    private static Integer findPivot(Integer[] elementArray) {
        if (elementArray.length <= 5)
            return findMedian(elementArray);

        Integer[] medianArray = new Integer[floorDiv(elementArray.length, 5)];
        Integer[] interimArray = new Integer[5];
        int medianIncrement = 0;
        for (int idx = 0; idx < elementArray.length; idx++) {
            interimArray[idx % 5] = elementArray[idx];
            if (idx != 0 && (idx + 1) % 5 == 0) {
                medianArray[medianIncrement] = findMedian(interimArray);
                medianIncrement++;
            }
        }

        if (medianIncrement > 1)
            return findPivot(medianArray);

        return medianArray[0];
    }
}
