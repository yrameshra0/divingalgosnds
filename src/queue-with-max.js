import * as queue from './infinite-memory-queue';
let maxQueue = Object.assign(queue, {}),
    infiniteQueue = Object.assign(queue, {}),
    enqueue = function enqueue(data) {
        if (maxQueue.peek() === undefined || maxQueue.peek() < data)
            maxQueue.enqueue(data);
        infiniteQueue.enqueue(data);
    },
    max = function max() {
        return maxQueue.peek();
    },
    dequeue = () => {
    };

export { enqueue, max, dequeue };
