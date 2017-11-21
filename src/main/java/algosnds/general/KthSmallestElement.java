package algosnds.general;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static java.lang.StrictMath.floorDiv;
import static java.util.stream.Collectors.toList;

public class KthSmallestElement {

    /**
     * +------------------------------------------------------------------------------------------------------------------
     * Steps to find the k-th smallest element
     * +------------------------------------------------------------------------------------------------------------------
     * Using an deterministic pivot finding algorithm
     * +------------------------------------------------------------------------------------------------------------------
     * 1) Divide the input elements into pockets of 5 elements
     * 2) Inside each pocket find median in O(1)
     * 3) Medians of all the pockets should be collated and we need to find median from this pocket
     * 4) Using the final median as a pivot partition the input elements
     * 5) Compare the k and length of partition
     * a) If l>=k then we know the k-th smallest element if from first partition
     * b) If l<k then the k-th smallest element from the entire list is also (k-l)th element from second list.
     * +------------------------------------------------------------------------------------------------------------------
     */

    public static Integer findKthElementDeterministic(List<Integer> elements, Integer k) {
        if (k == 1)
            return elements.get(0); //base case

        Integer pivot = findPivot(elements);
        int minimumSize = floorDiv(elements.size(), 2);
        List<Integer> greaterThanPivot = new ArrayList<>(minimumSize);
        List<Integer> lesserThanPivot = new ArrayList<>(minimumSize);

        elements.forEach(element -> {
            if (element <= pivot)
                lesserThanPivot.add(element);
            else
                greaterThanPivot.add(element);
        });

        if (lesserThanPivot.size() < k)
            return findKthElementDeterministic(greaterThanPivot, k - lesserThanPivot.size());
        else
            return findKthElementDeterministic(lesserThanPivot, k);
    }

    public static Integer findKthElementRandom(List<Integer> elements, Integer k) {
        if (elements.size() == 1)
            return elements.get(0);
        
        Random random = new Random();
        Integer pivot = elements.get(random.nextInt(elements.size()));
        int minimumSize = elements.size();
        List<Integer> greaterThanPivot = new ArrayList<>(minimumSize);
        List<Integer> lesserThanPivot = new ArrayList<>(minimumSize);

        elements.forEach(element -> {
            if (element <= pivot)
                lesserThanPivot.add(element);
            else
                greaterThanPivot.add(element);
        });

        if (lesserThanPivot.size() < k)
            return findKthElementRandom(greaterThanPivot, k - lesserThanPivot.size());
        else
            return findKthElementRandom(lesserThanPivot, k);
    }

    interface MedianGroupAddition {
        void apply(List<List<Integer>> median, List<Integer> subgroup);
    }

    private static Integer findPivot(List<Integer> elements) {
        List<List<Integer>> medianGroups = new ArrayList<>(floorDiv(elements.size(), 5));
        List<Integer> subGroups = new ArrayList<>(5);

        MedianGroupAddition addToMedianGroup = (medianGroup, subGroup) -> {
            medianGroup.add(new ArrayList<>(subGroup));
            subGroup.clear();
        };

        elements.forEach(element -> {
            subGroups.add(element);
            if (subGroups.size() == 5) {
                addToMedianGroup.apply(medianGroups, subGroups);
            }
        });

        // Additional subgroup elements which have not been added yet
        if (subGroups.size() != 0)
            addToMedianGroup.apply(medianGroups, subGroups);


        List<Integer> medians = medianGroups.stream()
                .map(MedianOfSmallArray::findMedian)
                .collect(toList());

        if (medians.size() > 1)
            return findPivot(medians);

        return medians.get(0);
    }
}
