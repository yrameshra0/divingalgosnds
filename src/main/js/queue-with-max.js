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
            // Indicates that we need to select new maxElement
            if (maxQueue.peekAtEntry() === undefined && infiniteQueue !== undefined) {
                let dequeueElems = ( function completeDequeue(tempArr) {
                    if (infiniteQueue.peekAtExit() === undefined)
                        return tempArr;

                    tempArr.push(infiniteQueue.dequeue());

                    return completeDequeue(tempArr)
                } )([]);

                dequeueElems.forEach((elem) => {
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
