package algosnds.stacks;

import java.util.ArrayList;

public class SetOfStacks {
    private final int maxSizeOfEachStack;
    private final ArrayList<Stack<Integer>> setOfStacks;
    private int currentIndex = 0;

    SetOfStacks(int maxSizeOfEachStack) {
        this.maxSizeOfEachStack = maxSizeOfEachStack;
        this.setOfStacks = new ArrayList<>();
        assignStackToSet();
    }

    private void assignStackToSet() {
        if (setOfStacks.isEmpty())
            addNewStack();

        if (setOfStacks.get(currentIndex).length() == maxSizeOfEachStack) {
            currentIndex++;
            addNewStack();
        }
    }

    private void reassignStackToSet() {
        if (setOfStacks.get(currentIndex).length() == 0) {
            setOfStacks.remove(currentIndex);
            currentIndex--;
        }
    }

    private void addNewStack() {
        setOfStacks.add(new Stack<>());
    }

    public void push(Integer data) {
        setOfStacks.get(currentIndex).push(data);
        assignStackToSet();
    }

    public Integer pop() {
        Integer data = setOfStacks.get(currentIndex).pop();
        reassignStackToSet();

        return data;
    }

    public int setsLength() {
        return this.setOfStacks.size();
    }

}