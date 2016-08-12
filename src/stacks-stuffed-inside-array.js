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
                getPosition: function getPosition() {
                    return position;
                },
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
        let stack = stacks[stackIndex],
            elemIndex;

        if (stack.isFull())
            expand(stackIndex);

        stack = stacks[stackIndex];
        elemIndex = stack.incrementIndexAndGet();

        buffer[elemIndex] = element;
    }

    function expand(stackIndex) {
        // finding space on the right hand side for expansion
        let shiftIndex = -1;
        stacks.forEach((stack, index) => {
            if (shiftIndex === -1 && !stack.isFull()) {
                shiftIndex = index;
            }
        });

        if (shiftIndex === -1)
            throw new Error('No space in stack for storage');


        if (shiftIndex > stackIndex) {
            for (let i = shiftIndex; i > stackIndex; i--) {
                let capacity = stacks[i].capacity;
                if (i === shiftIndex)
                    capacity = capacity - 1;

                shiftFront(i, capacity);
            }
        }

        if (shiftIndex < stackIndex) {
            for (let i = shiftIndex; i <= stackIndex; i++) {
                let capacity = stacks[i].capacity;
                if (i === shiftIndex)
                    capacity = capacity - 1;

                shiftBack(i, capacity);
            }
        }
        // Expanding 
        stacks[stackIndex].capacity = stacks[stackIndex].capacity + 1;
    }

    function shiftFront(stackIndex, capacity) {
        let stack = stacks[stackIndex],
            position = stack.getPosition(),
            newStack = stackData(stack.start + 1, capacity);

        stacks[stackIndex] = newStack;

        for (let i = position; i >= stack.start; i--) {
            buffer[i + 1] = buffer[i];
            buffer[i] = undefined;
            newStack.incrementIndexAndGet();
        }

        stack = undefined;
    }

    function shiftBack(stackIndex, capacity) {
        let stack = stacks[stackIndex],
            position = stack.getPosition(),
            newStack = undefined;
        if (stack.capacity > capacity) {
            newStack = stackData(stack.start, capacity);
        } else {
            newStack = stackData(stack.start - 1, capacity);
        }

        stacks[stackIndex] = newStack;

        if (stack.capacity > newStack.capacity) {
            newStack.incrementIndexAndGet();
            return;
        }

        for (let i = stack.start; i <= position; i++) {
            buffer[i - 1] = buffer[i];
            buffer[i] = undefined;
            newStack.incrementIndexAndGet()
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