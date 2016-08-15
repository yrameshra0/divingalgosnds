export default function newArrayStack() {

    const NUMBER_OF_STACKS = 3,
        DEFAULT_SIZE = 2,
        TOTAL_SIZE = DEFAULT_SIZE * NUMBER_OF_STACKS;

    let stackData = function(_start, _capacity) {
            let size = 0,
                start = _start,
                capacity = _capacity,
                getPosition = function getPosition() {
                    let position = start + size - 1;
                    return position;
                };

            return {
                start: start,
                capacity: capacity,
                getPosition: getPosition,
                incrementIndexAndGet: function incrementIndexAndGet() {
                    size++;

                    return getPosition();
                },
                deincrementIndexAndGet: function deincrementIndexAndGet() {
                    let position = getPosition();
                    size--;

                    return position;
                },
                isFull: function() {
                    return size === capacity;
                },
                update: function update(_start, _capacity) {
                    start = _start;
                    capacity = _capacity;
                },
                updateCapacity: function updateCapacity(_capacity) {
                    capacity = _capacity;
                },
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
            elemIndex = undefined;

        if (stack.isFull())
            expand(stackIndex);

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
        let stack = stacks[stackIndex];
        stack.updateCapacity(stack.capacity + 1);
    }

    function shiftFront(stackIndex, capacity) {
        let stack = stacks[stackIndex],
            position = stack.getPosition(),
            start = stack.start;

        stack.update(start + 1, capacity);

        for (let i = position; i >= start; i--) {
            buffer[i + 1] = buffer[i];
            buffer[i] = undefined;
        }
    }

    function shiftBack(stackIndex, capacity) {
        let stack = stacks[stackIndex],
            position = stack.getPosition(),
            start = stack.start;

        if (stack.capacity > capacity) {
            stack.updateCapacity(capacity);
            return;
        }

        stack.update(start - 1, capacity);

        for (let i = stack.start; i <= position; i++) {
            buffer[i - 1] = buffer[i];
            buffer[i] = undefined;
        }
    }

    function pop(stackIndex) {
        console.log(buffer);

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