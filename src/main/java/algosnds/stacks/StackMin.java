package algosnds.stacks;

public class StackMin extends Stack<Integer> {
    private final Stack<Integer> min;

    public StackMin() {
        this.min = new Stack<>();
    }

    @Override
    public void push(Integer element) {
        if (element < min())
            min.push(element);

        super.push(element);
    }

    @Override
    public Integer pop() {
        Integer element = super.pop();
        if (element.equals(min.peek()))
            min.pop();

        return element;
    }

    public Integer min() {
        if (min.isEmpty())
            return Integer.MAX_VALUE;

        return min.peek();
    }

}