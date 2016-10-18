package algosnds.stacks;

import java.util.ArrayList;
import java.util.List;

public class SetOfStacks {
    private final int maxSizeOfEachStack;
    private final List<Stack<Integer>> setOfStacks;
    private int currentIndex = 0;

    SetOfStacks(int maxSizeOfEachStack) {
        this.maxSizeOfEachStack = maxSizeOfEachStack;
        this.setOfStacks = new ArrayList<>();
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
        assignStackToSet();
        setOfStacks.get(currentIndex).push(data);
    }

    public Integer pop() {
        Integer data = setOfStacks.get(currentIndex).pop();
        reassignStackToSet();

        return data;
    }

    public Integer popAt(int index) {
        index = index + 1;
        int bucketIndex = findBucketIndex(index);

        if (bucketIndex == 0)
            throw new IndexOutOfBoundsException();

        Stack<Integer> stack = setOfStacks.get(bucketIndex - 1);
        Stack<Integer> accumulatorStack = new Stack<>();

        for (int i = bucketIndex * maxSizeOfEachStack; i > index; i--)
            accumulatorStack.push(stack.pop());

        Integer poppedData = stack.pop();

        reshuffleSetOfStacks(bucketIndex, accumulatorStack);

        return poppedData;
    }

    private void reshuffleSetOfStacks(int bucketIndex, Stack<Integer> currentStack) {
        List<Integer> tempList = new ArrayList<>();

        int remainingElements = elementCountToReshuffle(bucketIndex);
        while (remainingElements > 0) {
            tempList.add(pop());
            remainingElements -= 1;
        }

        while (!currentStack.isEmpty())
            push(currentStack.pop());

        for (int i = tempList.size() - 1; i >= 0; i--)
            push(tempList.get(i));
    }

    private int elementCountToReshuffle(int bucketIndex) {
        return (currentIndex - bucketIndex) * maxSizeOfEachStack + setOfStacks.get(currentIndex).length();
    }

    private int findBucketIndex(int index) {
        int nowIndex = 1;
        for (; nowIndex <= currentIndex; nowIndex++) {
            if (index > nowIndex * maxSizeOfEachStack)
                nowIndex++;
        }
        return nowIndex - 1;
    }

    public int setsLength() {
        return this.setOfStacks.size();
    }

}