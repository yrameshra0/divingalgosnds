package algosnds.arraysnstrings;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class MatrixRotationTest {
    private MatrixRotation rotator = new MatrixRotation();

    @Test
    public void rotates_input_matrix_90_degrees() {
        String[][] matrix = {
                {"00", "01", "02", "03"},
                {"10", "11", "12", "13"},
                {"20", "21", "22", "23"},
                {"30", "31", "32", "33"}
        };

        String[][] rotatedMatrix = {
                {"30", "20", "10", "00"},
                {"31", "21", "11", "01"},
                {"32", "22", "12", "02"},
                {"33", "23", "13", "03"}
        };

        rotator.rotate(matrix);

        assertThat(matrix, is(rotatedMatrix));
    }

    @Test
    public void fails_to_rotate_non_square_and_empty_matrix() {
        String[][] matrix = {
                {"00", "01", "02", "03"},
                {"10", "11", "12", "13"},
                {"20", "21", "22", "23"},
                {"30", "31", "32", "33"},
                {"30", "31", "32", "33"}
        };

        String[][] emptyMatrix = {{}};

        assertThat(rotator.rotate(emptyMatrix), is(false));
        assertThat(rotator.rotate(matrix), is(false));
    }
}