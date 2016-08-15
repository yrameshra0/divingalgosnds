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
        buffer = new Array(TOTAL_SIZE),
        shiftActions = {
            front: {
                loopControl: (i, stackIndex) => {
                    return i > stackIndex;
                },
                loopIteration: (i) => {
                    return i - 1;
                },
                adjust: (info, capacity) => {
                    info.stack.update(info.start + 1, capacity);

                    for (let i = info.position; i >= info.start; i--) {
                        buffer[i + 1] = buffer[i];
                        buffer[i] = undefined;
                    }
                }
            },
            back: {
                loopControl: (i, stackIndex) => {
                    return i <= stackIndex;
                },
                loopIteration: (i) => {
                    return i + 1;
                },
                adjust: (info, capacity) => {
                    if (info.stack.capacity > capacity) {
                        info.stack.updateCapacity(capacity);
                        return;
                    }

                    info.stack.update(info.start - 1, capacity);

                    for (let i = info.stack.start; i <= info.position; i++) {
                        buffer[i - 1] = buffer[i];
                        buffer[i] = undefined;
                    }
                }
            }
        };

    function searchStackForMovement() {
        let moveToIndex = -1;
        stacks.forEach((stack, index) => {
            if (moveToIndex === -1 && !stack.isFull()) {
                moveToIndex = index;
            }
        });

        if (moveToIndex === -1)
            throw new Error('No space in stack for storage');

        return moveToIndex
    }

    function searchMovementDirection(shiftIndex, expandingStackIndex) {
        if (shiftIndex > expandingStackIndex)
            return shiftActions["front"];

        if (shiftIndex < expandingStackIndex)
            return shiftActions["back"];
    }

    function expand(stackIndex) {
        let shiftIndex = searchStackForMovement(),
            shift = searchMovementDirection(shiftIndex, stackIndex);

        for (let i = shiftIndex; shift.loopControl(i, stackIndex); i = shift.loopIteration(i)) {
            let capacity = stacks[i].capacity;
            if (i === shiftIndex)
                capacity = capacity - 1;

            adjustBuffer(shift, stacks[i], capacity);
        }

        // Expanding 
        let stack = stacks[stackIndex];
        stack.updateCapacity(stack.capacity + 1);
    }

    function adjustBuffer(shift, stack, capacity) {
        shift.adjust({
            stack: stack,
            position: stack.getPosition(),
            start: stack.start
        }, capacity)
    }

    function push(stackIndex, element) {
        let stack = stacks[stackIndex],
            elemIndex = undefined;

        if (stack.isFull())
            expand(stackIndex);

        elemIndex = stack.incrementIndexAndGet();

        buffer[elemIndex] = element;
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