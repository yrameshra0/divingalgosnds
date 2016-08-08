export default function newArrayStack() {

    const NUMBER_OF_STACKS = 3,
        DEFAULT_SIZE = 2,
        TOTAL_SIZE = DEFAULT_SIZE * NUMBER_OF_STACKS;

    let stackData = function(_start, _capacity) {
            let size = 0,
                start = _start,
                capacity = _capacity,
                position = -1;

            return {
                start: start,
                capacity: capacity,
                incrementIndexAndGet: function incrementIndexAndGet() {
                    position = start + size;
                    size++;

                    return position;
                },
                deincrementIndexAndGet: function deincrementIndexAndGet() {
                    let index = position;
                    size--;
                    position--;

                    return index;
                },
                isFull: function() {
                    return size === capacity;
                },
                isEmpty: function() {
                    return size === 0;
                }
            };
        },
        stacks = [
            stackData(DEFAULT_SIZE * 0, DEFAULT_SIZE),
            stackData(DEFAULT_SIZE * 1, DEFAULT_SIZE),
            stackData(DEFAULT_SIZE * 2, DEFAULT_SIZE)
        ],
        buffer = new Array(TOTAL_SIZE);



    function push(stackIndex, element) {
        let stack = stacks[stackIndex];

        if (stack.isFull())
            expand(stackIndex);

        buffer[stack.incrementIndexAndGet()] = element;
    }

    function expand(stackIndex) {
        // finding space on the right hand side for expansion
        if (!stacks[stackIndex + 1].isFull())
            shift(stackIndex + 1);
    }

    function shift(stackIndex) {
        let stack = stacks[stackIndex],
            newStack = stackData(stack.start + 1, stack.capacity - 1);

        stacks[stackIndex] = newStack

        while (!stack.isEmpty()) {
            push(stackIndex, buffer[stack.deincrementIndexAndGet()]);
        }

        stack = undefined;
    }

    function pop(stackIndex) {
        let stack = stacks[stackIndex],
            index = stack.deincrementIndexAndGet(),
            value = buffer[index];

        buffer[index] = undefined
        return value;
    }

    return {
        push: push,
        pop: pop
    };
}