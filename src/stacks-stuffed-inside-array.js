export default function newArrayStack() {

    const NUMBER_OF_STACKS = 3,
        DEFAULT_SIZE = 4,
        TOTAL_SIZE = DEFAULT_SIZE * NUMBER_OF_STACKS;

    let stackData = function(_start, _capacity) {
            return {
                start: _start,
                capacity: _capacity,
                pointer: _start - 1,
                size: 0
            };
        },
        stacks = [stackData(0, DEFAULT_SIZE), stackData(1, DEFAULT_SIZE), stackData(2, DEFAULT_SIZE)],
        buffer = new Array(TOTAL_SIZE);



    function push(stackIndex, element) {
        let stack = stacks[stackIndex];
        stack.size++;
        stack.pointer = stack.pointer + 1;
        buffer[stack.pointer] = element;
    }

    function pop(stackIndex) {
        let stack = stacks[stackIndex],
            value = buffer[stack.pointer];

        return value;
    }

    return {
        push: push,
        pop: pop
    };
}