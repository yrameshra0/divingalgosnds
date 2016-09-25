package algosnds.arraysnstrings;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class ZeroMatrixTest {
	private ZeroMatrix zeroMatrix = new ZeroMatrix();

	@Test
	public void nullify_row_column_when_zero_encountered_in_cell() {
		int[][] actualMatrix = {
			{1, 1, 2, 1},
			{1, 0, 1, 2},
			{1, 4, 0, 1}
		};

		int[][] transformedMatrix = {
			{1, 0, 0, 1},
			{0, 0, 0, 0},
			{0, 0, 0, 0}
		};

		zeroMatrix.process(actualMatrix);

		assertThat(actualMatrix, is(transformedMatrix));
	}

	@Test
	public void nullify_row_column_when_with_zero_in_first_row_and_column() {
		int[][] actualMatrix = {
			{1, 1, 0, 1},
			{1, 1, 1, 2},
			{0, 4, 2, 1}
		};

		int[][] transformedMatrix = {
			{0, 0, 0, 0},
			{0, 1, 0, 2},
			{0, 0, 0, 0}
		};

		zeroMatrix.process(actualMatrix);

		assertThat(actualMatrix, is(transformedMatrix));
	}
}
