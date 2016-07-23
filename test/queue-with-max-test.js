import { assert } from 'chai';
import createMaxQueue from '../src/queue-with-max';

describe('Queuing elements and keeping track of max of queue', () => {
    it('Retrieve max element of queue', () => {
        let queueWithMax = createMaxQueue();
        queueWithMax.enqueue(1);
        queueWithMax.enqueue(2);
        queueWithMax.enqueue(5);
        queueWithMax.enqueue(4);
        queueWithMax.enqueue(3);

        assert.equal(queueWithMax.max(), 5);
    });

    it('Maintain max element with de-queuing', () => {
        let queueWithMax = createMaxQueue();

        queueWithMax.enqueue(1);
        queueWithMax.enqueue(2);
        queueWithMax.enqueue(5);
        queueWithMax.enqueue(4);
        queueWithMax.enqueue(3);

        queueWithMax.dequeue();
        queueWithMax.dequeue();
        queueWithMax.dequeue();

        assert.equal(queueWithMax.max(), 4);
        queueWithMax.dequeue();
        assert.equal(queueWithMax.max(), 3);
        queueWithMax.dequeue();
        assert.equal(queueWithMax.max(), undefined);
    });
});