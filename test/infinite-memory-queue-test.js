import { assert } from 'chai';
import * as queue from '../src/infinite-memory-queue';

describe('Queue operations', () => {
    it('Add items to queue', () => {
        queue.enqueue(19);
        queue.enqueue(20);
        assert.equal(queue.dequeue(), 19);
        assert.equal(queue.dequeue(), 20);
    });

    it('Remove items from queue', () => {
        queue.enqueue(19);
        assert.equal(queue.dequeue(), 19);
        assert.equal(queue.dequeue(), undefined);
    });

    it('Peek inside queue', () => {
        assert.equal(queue.peek(), undefined);
        queue.enqueue(19);
        queue.enqueue(20);
        assert.equal(queue.peek(), 20);
        queue.dequeue();
        queue.dequeue();
    });
});