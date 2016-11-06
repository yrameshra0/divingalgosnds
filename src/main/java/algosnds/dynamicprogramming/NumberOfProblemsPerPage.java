package algosnds.dynamicprogramming;

import java.util.ArrayList;
import java.util.List;

public class NumberOfProblemsPerPage {
    private int[] paperKinds = new int[]{12, 10};
    private boolean arrivedAtSolution = false;
    private int numberOfProblemsToArrange;
    private List<Integer> solutionList = new ArrayList<>();

    public List<Integer> arrange(int numberOfProblemsToArrange) {
        this.numberOfProblemsToArrange = numberOfProblemsToArrange;

        findCorrectPaperToSolve(numberOfProblemsToArrange, 0);

        return solutionList;
    }

    private int findCorrectPaperToSolve(int questionsToSolve, int paperIndex) {
        if (questionsToSolve < 0)
            return 0;

        if (questionsToSolve == 0) {
            arrivedAtSolution = true;
            return 1;
        }

        if (paperIndex == paperKinds.length && questionsToSolve > 0)
            return 0;


        int withFirstElement = findCorrectPaperToSolve(questionsToSolve - paperKinds[paperIndex], paperIndex);
        int withoutFirstElement = 0;

        addDenominationInToSolutionList(questionsToSolve, paperKinds[paperIndex]);

        if (withFirstElement != 1)
            withoutFirstElement = findCorrectPaperToSolve(questionsToSolve, paperIndex + 1);

        return withFirstElement + withoutFirstElement;
    }

    private void addDenominationInToSolutionList(int questionsToSolve, int paperKind) {
        if (arrivedAtSolution && questionsToSolve >= paperKind) {
            if (questionsToSolve == numberOfProblemsToArrange)
                arrivedAtSolution = false;
            solutionList.add(paperKind);
        }
    }

}