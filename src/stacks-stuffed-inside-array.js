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
                getSize: function getSize() {
                    return size;
                },
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
        if (buffer.length > TOTAL_SIZE)
            throw "Stack is full";
        console.log(buffer);
    }

    function expand(stackIndex) {
        // finding space on the right hand side for expansion
        let shiftIndex = -1;
        stacks.some((stack, index) => {
            if (!stack.isFull()) {
                shiftIndex = index;
                return index;
            }
        });

        for (let i = shiftIndex; i > stackIndex; i--) {
            console.log("SHITING --> " + i);
            let capacity = stacks[i].capacity;
            if (i === shiftIndex)
                capacity = capacity - 1;

            shift(i, capacity);
        }
        // Expanding 
        stacks[stackIndex].capacity = stacks[stackIndex].capacity + 1;
    }

    function shift(stackIndex, capacity) {
        let stack = stacks[stackIndex],
            position = stack.getPosition(),
            newStack = stackData(stack.start + 1, capacity);

        stacks[stackIndex] = newStack
        console.log("START --> " + stack.start + " POSITIION -->" + position);
        for (let i = position; i >= stack.start; i--) {
            buffer[i + 1] = buffer[i];
            buffer[i] = undefined;
            newStack.incrementIndexAndGet();
            console.log(buffer);
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