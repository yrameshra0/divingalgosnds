package algosnds.general;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static java.util.stream.Collectors.toSet;

public class KDifference {

    public Set<Pair> kDifferencePairs(Integer[] arrayOfElements, int kDifference) {

        Set<Integer> elements = Arrays.stream(arrayOfElements).collect(toSet());
        Set<Pair> solutions = new HashSet<>();

        elements.forEach(element -> {
            Integer localDifference = element - kDifference;
            if (localDifference > 0 && elements.contains(localDifference)) {
                // Creates the pair
                solutions.add(new Pair(element, localDifference));
            }
        });

        return solutions;
    }

    public static class Pair {
        private final Integer left;
        private final Integer right;

        public Pair(Integer left, Integer right) {
            this.left = left;
            this.right = right;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Pair pair = (Pair) o;
            boolean anywhereLeftMatching = Objects.equals(left, pair.left) || Objects.equals(left, pair.right);
            boolean anywhereRightMatching = Objects.equals(right, pair.right) || Objects.equals(right, pair.left);
            
            return anywhereLeftMatching && anywhereRightMatching;

        }

        @Override
        public int hashCode() {
            return Objects.hash(left, right);
        }

        @Override
        public String toString() {
            return "Pair{" +
                    "left=" + left +
                    ", right=" + right +
                    '}';
        }
    }
}
