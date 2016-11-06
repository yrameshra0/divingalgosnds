package algosnds.dynamicprogramming;

import org.junit.Test;

import java.util.Collections;

import static org.hamcrest.CoreMatchers.hasItems;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class NumberOfProblemsPerPageTest {

    private NumberOfProblemsPerPage numberOfProblemsPerPage = new NumberOfProblemsPerPage();

    @Test
    public void finding_solution_with_combination_of_papers() {
        assertThat(numberOfProblemsPerPage.arrange(44), hasItems(10, 10, 12, 12));
        assertThat(numberOfProblemsPerPage.arrange(22), hasItems(10, 12));
    }

    @Test
    public void finding_solution_with_single_combination_of_papers() {
        assertThat(numberOfProblemsPerPage.arrange(40), hasItems(10, 10, 10, 10));
        assertThat(numberOfProblemsPerPage.arrange(24), hasItems(12, 12));
    }

    @Test
    public void no_solutions_availability() {
        assertThat(numberOfProblemsPerPage.arrange(23), is(Collections.emptyList()));
        assertThat(numberOfProblemsPerPage.arrange(13), is(Collections.emptyList()));
    }
}