package algosnds.stacks;

public class StackSorting {
    
    public void sort(Stack<Integer> inputStack) {
        Stack<Integer> outputStack = new Stack<>();
        sortInputStackAccumulateInOutputStack(inputStack, outputStack);
        copyOutputStackOnInputStack(inputStack, outputStack);
    }

    private void copyOutputStackOnInputStack(Stack<Integer> inputStack, Stack<Integer> outputStack) {
        while (!outputStack.isEmpty())
            inputStack.push(outputStack.pop());
    }

    private void sortInputStackAccumulateInOutputStack(Stack<Integer> inputStack, Stack<Integer> outputStack) {
        while (!inputStack.isEmpty()) {
            Integer element = inputStack.pop();

            while (!outputStack.isEmpty() && outputStack.peek() > element)
                inputStack.push(outputStack.pop());

            outputStack.push(element);
        }
    }
}