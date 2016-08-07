export default function newArrayStack() {

    const NUMBER_OF_STACKS = 3,
        DEFAULT_SIZE = 4,
        TOTAL_SIZE = DEFAULT_SIZE * NUMBER_OF_STACKS;

    let stackData = function(_start, _capacity) {
            let size = 0,
                start = _start,
                capacity = _capacity,
                position = -1,
                incrementIndexAndGet = function incrementIndexAndGet() {
                    position = start + size;
                    size++;

                    return position;
                },
                deincrementIndexAndGet = function deincrementIndexAndGet() {
                    let index = position;
                    size--;
                    position--;

                    return index;
                };

            return {
                incrementIndexAndGet: incrementIndexAndGet,
                deincrementIndexAndGet: deincrementIndexAndGet
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

        buffer[stack.incrementIndexAndGet()] = element;
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