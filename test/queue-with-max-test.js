import { assert } from 'chai';
import * as queueWithMax from '../src/queue-with-max';

describe('Queuing elements and keeping track of max of queue', () => {
    it('Retrieve max element of queue', () => {
        queueWithMax.enqueue(1);
        queueWithMax.enqueue(2);
        queueWithMax.enqueue(5);
        queueWithMax.enqueue(4);
        queueWithMax.enqueue(3);

        assert.equal(queueWithMax.max(), 5);
    });
});