package algosnds.arraysnstrings;

public class MatrixRotation {

    public boolean rotate(String[][] matrix) {
        if (matrix.length == 0 || matrix.length != matrix[0].length)
            return false;

        int n = matrix.length;
        for (int layer = 0; layer < n / 2; layer++) {
            int first = layer;
            int last = n - 1 - first;

            for (int i = first; i < last; i++) {
                int offset = i - first;
                // top
                String top = matrix[first][i];
                // moving top to left
                matrix[first][i] = matrix[last - offset][first];
                //moving left to bottom
                matrix[last - offset][first] = matrix[last][last - offset];
                //moving bottom to right
                matrix[last][last - offset] = matrix[i][last];
                //moving right to top
                matrix[i][last] = top;
            }
        }

        return true;
    }
}