package algosnds.arraysnstrings;

public class ZeroMatrix {

    public void process(int[][] matrix) {
        // Solution without using additional buffer for tracking the transformations
        int rowSize = matrix.length;
        int columnSize = matrix[0].length;
        boolean firstRowHasZero = isFirstRowHasZero(matrix[0], columnSize);
        boolean firstColumnHasZero = isFirstColumnHasZero(matrix, rowSize);

        checkAndMarkWhenZeroIsFound(matrix, rowSize, columnSize);

        nullifyRowsBasedOverFirstColumn(matrix, rowSize, columnSize);
        nullifyColumnsBasedOverFirstRow(matrix, rowSize, columnSize);

        if (firstRowHasZero)
            nullifyRow(matrix, 0, columnSize);

        if (firstColumnHasZero)
            nullifyColumn(matrix, 0, rowSize);
    }

    private void checkAndMarkWhenZeroIsFound(int[][] matrix, int rowSize, int columnSize) {
        for (int i = 1; i < rowSize; i++) {
            for (int j = 1; j < columnSize; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
    }

    private void nullifyColumnsBasedOverFirstRow(int[][] matrix, int rowSize, int columnSize) {
        for (int i = 0; i < columnSize; i++)
            if (matrix[0][i] == 0)
                nullifyColumn(matrix, i, rowSize);
    }

    private void nullifyRowsBasedOverFirstColumn(int[][] matrix, int rowSize, int columnSize) {
        for (int i = 0; i < rowSize; i++)
            if (matrix[i][0] == 0)
                nullifyRow(matrix, i, columnSize);
    }

    private boolean isFirstColumnHasZero(int[][] matrix, int rowSize) {
        for (int i = 0; i < rowSize; i++)
            if (matrix[i][0] == 0)
                return true;

        return false;
    }

    private boolean isFirstRowHasZero(int[] firstRow, int columnSize) {
        for (int i = 0; i < columnSize; i++)
            if (firstRow[i] == 0)
                return true;

        return false;
    }

    private void nullifyRow(int[][] matrix, int row, int columnSize) {
        for (int i = 0; i < columnSize; i++)
            matrix[row][i] = 0;
    }


    private void nullifyColumn(int[][] matrix, int column, int rowSize) {
        for (int i = 0; i < rowSize; i++)
            matrix[i][column] = 0;
    }
}