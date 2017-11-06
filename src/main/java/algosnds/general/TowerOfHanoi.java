package algosnds.general;

import algosnds.stacks.Stack;

public class TowerOfHanoi {

    public static void shiftFromSourceToDestination(Stack<Integer> source, Stack<Integer> destination) {
        Stack<Integer> spareTower = new Stack<>();
        shifting(source.length(), source, destination, spareTower);
    }

    private static void shifting(int n, Stack<Integer> source, Stack<Integer> destination, Stack<Integer> spare) {
        if(n<=0) return;

        shifting(n-1, source, spare, destination);
        destination.push(source.pop());
        shifting(n-1, spare, destination, source);
    }
}
