import createQueue from './infinite-memory-queue';

export default function createMaxQueue() {
    let maxQueue = createQueue(),
        infiniteQueue = createQueue(),
        enqueue = function enqueue(data) {
            if (maxQueue.peekAtEntry() === undefined || maxQueue.peekAtEntry() < data)
                maxQueue.enqueue(data);
            infiniteQueue.enqueue(data);
        },
        max = function max() {
            return maxQueue.peekAtEntry();
        },
        reElectMaxElement = function reElectMaxElement() {
            if (maxQueue.peekAtEntry() === undefined && infiniteQueue !== undefined) {
                // Indicates that we need to select new maxElement
                let tempArr = [];
                ( function completeDequeue() {
                    if (infiniteQueue.peekAtExit() === undefined)
                        return;
                    tempArr.push(infiniteQueue.dequeue());

                    completeDequeue()
                } )();
                tempArr.forEach((elem) => {
                    enqueue(elem);
                });
            }
        },
        dequeue = function dequeue() {
            if (maxQueue.peekAtExit() === infiniteQueue.dequeue())
                maxQueue.dequeue();

            reElectMaxElement();
        };

    return {
        enqueue: enqueue,
        max: max,
        dequeue: dequeue
    };
}
