package algosnds.stacks;

public class SortedStack extends Stack<Integer> {
    private Stack<Integer> tempStack = new Stack<>();

    @Override
    public void push(Integer data) {
        shuffleForNewElement(data);
        super.push(data);
        rePushTempStack();
    }

    private void shuffleForNewElement(Integer data) {
        while (!super.isEmpty() && data > super.peek()) {
            tempStack.push(super.pop());
        }
    }

    private void rePushTempStack() {
        while (!tempStack.isEmpty())
            super.push(tempStack.pop());
    }
}