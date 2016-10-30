package algosnds.general;

import java.util.Objects;

public class TippingPointInHill {

    public Occurrence search(int[] hill) {
        return binarySearch(hill, 0, hill.length - 1);
    }

    private Occurrence binarySearch(int[] hill, int start, int end) {
        if (start == end)
            return new Occurrence(hill[start], start);

        // If there are two elements and first is greater then the first element is maximum
        if ((end == start + 1) && hill[start] >= hill[end])
            return new Occurrence(hill[start], start);

        // If there are two elements and second is greater then the second element is maximum
        if ((end == start + 1) && hill[start] < hill[end])
            return new Occurrence(hill[end], end);

        int mid = (start + end) / 2;

        if (hill[mid] > hill[mid - 1] && hill[mid] > hill[mid + 1])
            return new Occurrence(hill[mid], mid);

        if (hill[mid] < hill[mid + 1])
            return binarySearch(hill, mid + 1, end);
        else
            return binarySearch(hill, start, mid - 1);
    }


    public static class Occurrence {
        public final int value;
        public final int index;

        Occurrence(int value, int index) {
            this.value = value;
            this.index = index;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Occurrence that = (Occurrence) o;
            return value == that.value &&
                    index == that.index;
        }

        @Override
        public int hashCode() {
            return Objects.hash(value, index);
        }
    }
}